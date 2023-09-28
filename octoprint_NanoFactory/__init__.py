# coding=utf-8
from __future__ import absolute_import

import json
import os
import platform
import sys
from time import time
from uuid import uuid4
import webbrowser


import requests
from flask import request
from typing_extensions import Literal

import octoprint.plugin
from octoprint.util import RepeatedTimer

from . import BedLevelling
from .Utilities import (
    check_cors_for_octoprint_api,
    check_if_browser_is_installed,
    close_browser,
    initialize_user_data_directory,
    is_executable,
    restart_browser,
    start_browser_thread,
    start_webssh_thread,
    stop_webssh,
)


class NanofactoryPlugin(
    octoprint.plugin.StartupPlugin,
    octoprint.plugin.SettingsPlugin,
    octoprint.plugin.AssetPlugin,
    octoprint.plugin.TemplatePlugin,
    octoprint.plugin.SimpleApiPlugin,
    octoprint.plugin.ShutdownPlugin,
    octoprint.plugin.BlueprintPlugin,
):
    def initialize(self):
        self.peer_ID = ""
        self.api_key: str = ""
        self.base_url: str = ""
        self.master_peer_id: str = ""
        self.pid: str = ""
        self.cors_error = False
        self.os: Literal["Windows", "Darwin", "Linux"] = "Linux"
        self.browser_installed = False
        self.restart_mode: Literal["stable", "dev"] = "stable"
        self.showBrowserGUI = False
        self.last_heartbeat_time = 0
        self.heartbeat_timer = None
        self.heartbeat_interval = 10
        self.show_restart_server_modal = False

    # # ~~ StartupPlugin mixin
    def on_startup(self, host, port):
        self.os = platform.system()
        if host == "::":
            host = "localhost"
        self.base_url = f"http://{host}:{port}"
        if is_executable():
            # running in a bundle as an executable
            self.config_path = os.path.join(sys._MEIPASS, str(port), "config.json")

    def fetch_executable_config(self):
        config = {
            "profile": "nf_profile.json",
            "start_heartbeat": True,
        }

        if not is_executable():
            # not running in an executable env
            # normal plugin
            return config

        # open file config.json
        # and load the configuration
        with open(self.config_path, "r") as f:
            config: dict = json.loads(f.read())

        return config

    def on_after_startup(self):
        executable_config = self.fetch_executable_config()
        profile_name = executable_config.get("profile", "nf_profile.json")
        start_hearbeat = executable_config.get("start_heartbeat", True)

        self.load_nf_profile(nf_profile_name=profile_name)
        self.cors_error = check_cors_for_octoprint_api()
        self.browser_installed = check_if_browser_is_installed(self.os)

        initialize_user_data_directory(self.os)
        if self.api_key and self.peer_ID and self.browser_installed:
            start_browser_thread(
                self.os, self.api_key, self.peer_ID, self.master_peer_id, self.base_url
            )
            if start_hearbeat:
                self.start_heartbeat_timer()

        # check if a display is available
        # and the os is mac or windows
        # system tray is not available on linux
        if self.os != "Linux" and is_executable():
            self.start_system_tray()

    def start_system_tray(self):
        # Importing in the method because this will only
        # be needed if there is a GUI available
        import pystray
        from PIL import Image

        self._logger.info("Starting system tray")
        # create tray icon
        image_path = os.path.join(sys._MEIPASS, "NanoFactory.png")
        image = Image.open(image_path)
        printer_name_menu_item = pystray.MenuItem(
            self.get_printer_name(), lambda _, i: self.open_printer_octoprint()
        )
        exit_menu_item = pystray.MenuItem("Exit", self.on_exit)
        restart_menu_item = pystray.MenuItem(
            "Restart", lambda _, i: self.restart_server()
        )
        menu = pystray.Menu(restart_menu_item, exit_menu_item)
        icon = pystray.Icon("NanoFactory Server", image, "NanoFactory Server", menu)
        icon.run_detached()

    def get_printer_name(self):
        return "Printer name"

    def open_printer_octoprint(self):
        """
        Open the printer's OctoPrint page in the browser
        The url will look something like this:
        http://localhost:42069/?#tab_plugin_octoprint_NanoFactory
        """
        webbrowser.open(self.base_url + "/?#tab_plugin_octoprint_NanoFactory")

    def on_exit(self, icon, item):
        self._logger.info("Exiting, bye bye")
        icon.stop()
        self.on_shutdown()
        os.kill(os.getpid(), 9)
        sys.exit(0)

    def restart_server(self):
        restart_browser(
            self.os,
            self.api_key,
            self.peer_ID,
            self.master_peer_id,
            self.base_url,
        )

    # # ~~ SimpleApiPlugin mixin
    def get_api_commands(self):
        return {
            "getPeerID": [],
            "getAPIKey": [],
            "saveAPIKEY": ["api_key"],
            "getMasterPeerID": [],
            "saveMasterPeerID": ["masterPeerID"],
            "restartNanoFactoryApp": ["mode"],
            "deleteNanoFactoryDatabase": [],
            "getCors": [],
            "getBrowserInstalled": [],
            "giveupSnapshotCameraStream": [],
            "startNanoFactoryPostSetup": [],
            "getOperatingSystem": [],
            "getShowBrowserGUI": [],
            "setShowBrowserGUI": ["showBrowserGUI"],
            "getRestartServerModal": [],
            "getServerMode": [],
        }

    def on_api_command(self, command, data):
        if command == "saveAPIKEY":
            self.api_key = data["api_key"]
            try:
                with open(
                    os.path.join(self.get_plugin_data_folder(), "nf_profile.json"), "r+"
                ) as f:
                    nf_profile = json.loads(f.read())
                    nf_profile["api_key"] = self.api_key
                    f.seek(0)
                    json.dump(nf_profile, f)
                    f.truncate()

                restart_browser(
                    self.os,
                    self.api_key,
                    self.peer_ID,
                    self.master_peer_id,
                    self.base_url,
                )

            except Exception as e:
                self._logger.warning(e, exc_info=True)

        elif command == "getAPIKey":
            self.send_api_key()

        elif command == "startNanoFactoryPostSetup":
            self.browser_installed = check_if_browser_is_installed(self.os)

            if self.browser_installed:
                start_browser_thread(
                    self.os,
                    self.api_key,
                    self.peer_ID,
                    self.master_peer_id,
                    self.base_url,
                )

                stop_webssh()

            self._plugin_manager.send_plugin_message(
                self._identifier, {"browser_installed": self.browser_installed}
            )

        elif command == "getPeerID":
            self._plugin_manager.send_plugin_message(
                self._identifier, {"peerID": self.peer_ID}
            )

        elif command == "getMasterPeerID":
            self.send_master_peer_id()

        elif command == "saveMasterPeerID":
            self.master_peer_id = data["masterPeerID"]
            self.send_master_peer_id()
            self.update_nf_profile()

        elif command == "restartNanoFactoryApp":
            self.restart_mode = data["mode"]
            restart_browser(
                self.os,
                self.api_key,
                self.peer_ID,
                self.master_peer_id,
                self.base_url,
            )

        elif command == "deleteNanoFactoryDatabase":
            self._plugin_manager.send_plugin_message(
                self._identifier, {"deleteDatabase": "deleteNanoFactoryDatabase"}
            )

        elif command == "giveupSnapshotCameraStream":
            self._plugin_manager.send_plugin_message(
                self._identifier, {"releaseSnapshotStream": "releaseSnapshotStream"}
            )

        elif command == "getCors":
            if self.cors_error:
                self._plugin_manager.send_plugin_message(
                    self._identifier,
                    {
                        "cors_error": "Please enable CORS to allow NanoFactory to work properly. \n Go to Settings > API and check 'Allow Cross Origin Resource Sharing (CORS)'"
                    },
                )

        elif command == "getBrowserInstalled":
            self._plugin_manager.send_plugin_message(
                self._identifier, {"browser_installed": self.browser_installed}
            )
            if not self.browser_installed and self.os == "Linux":
                start_webssh_thread()

        elif command == "getOperatingSystem":
            self._plugin_manager.send_plugin_message(
                self._identifier, {"operating_system": self.os}
            )

        elif command == "getShowBrowserGUI":
            self.send_show_browser_gui()

        elif command == "setShowBrowserGUI":
            self.updateShowBrowserGUI(data["showBrowserGUI"])
            restart_browser(
                self.os, self.api_key, self.peer_ID, self.master_peer_id, self.base_url
            )

        elif command == "getRestartServerModal":
            self.send_restart_server_modal()

        elif command == "getServerMode":
            self.send_server_mode()

    def updateShowBrowserGUI(self, showBrowserGUI):
        self.showBrowserGUI = showBrowserGUI
        self.update_nf_profile()
        self.send_show_browser_gui()

    @octoprint.plugin.BlueprintPlugin.route(
        "/show_restart_server_modal", methods=["GET"]
    )
    @octoprint.plugin.BlueprintPlugin.csrf_exempt()
    def show_restart_server_modal_endpoint(self):
        show_modal = request.args.get("show_modal", None)
        if show_modal:
            self.show_restart_server_modal = True
            self.send_restart_server_modal()
            self._logger.warning("Device restart required")
        else:
            self.show_restart_server_modal = False
        return "Success"

    @octoprint.plugin.BlueprintPlugin.route("/save_master_peer_id", methods=["POST"])
    @octoprint.plugin.BlueprintPlugin.csrf_exempt()
    def save_master_peer_id_endpoint(self):
        master_peer_id = request.args.get("master_peer_id", None)
        if master_peer_id:
            self.master_peer_id = master_peer_id
            self.update_nf_profile()
            self.send_master_peer_id()
        return "Success"

    @octoprint.plugin.BlueprintPlugin.route("/heartbeat", methods=["GET"])
    @octoprint.plugin.BlueprintPlugin.csrf_exempt()
    def handle_server_heartbeat(self):
        self.last_heartbeat_time = time()
        return "Success"

    @octoprint.plugin.BlueprintPlugin.route("/peer_connection_error", methods=["GET"])
    @octoprint.plugin.BlueprintPlugin.csrf_exempt()
    def send_peer_error_message_to_frontend(self):
        retry_connection_timeout = request.args.get("timeout", 15)
        self._plugin_manager.send_plugin_message(
            self._identifier,
            {
                "peer_error": "NanoFactory could not connect to the peer server. We will automatically retry connection in "
                + retry_connection_timeout
                + " seconds"
            },
        )
        return "Success"

    @octoprint.plugin.BlueprintPlugin.route("/peer_connection_success", methods=["GET"])
    @octoprint.plugin.BlueprintPlugin.csrf_exempt()
    def send_peer_success_message_to_frontend(self):
        self._plugin_manager.send_plugin_message(
            self._identifier,
            {"peer_success": "NanoFactory connected to the peer server successfully"},
        )
        return "Success"

    @octoprint.plugin.BlueprintPlugin.route("/initiate_bed_levelling", methods=["GET"])
    @octoprint.plugin.BlueprintPlugin.csrf_exempt()
    def start_bed_levelling(self):
        if not BedLevelling.processing:
            BedLevelling.mesh = []
            # Homing all untrusted axes
            self._printer.commands("G28 0")
            # Initiating bed levelling
            self._printer.commands("G29")
            BedLevelling.processing = True

        return "Success"

    @octoprint.plugin.BlueprintPlugin.route("/get_bed_levelling", methods=["GET"])
    @octoprint.plugin.BlueprintPlugin.csrf_exempt()
    def get_bed_levelling_data(self):
        if BedLevelling.processing:
            return {}
        else:
            try:
                with open(
                    os.path.join(
                        self.get_plugin_data_folder(), "bed_levelling_data.json"
                    ),
                    "r",
                ) as f:
                    data = json.loads(f.read())
                    return {"data": data}
            except Exception as e:
                return {}

    @octoprint.plugin.BlueprintPlugin.route("/add_to_octoprint_log", methods=["POST"])
    @octoprint.plugin.BlueprintPlugin.csrf_exempt()
    def add_console_log_to_octoprint_log(self):
        message_type = request.args.get("message_type", None)
        message = request.args.get("message", None)

        if message_type == "info" or message_type == "log":
            self._logger.info(message)
        elif message_type == "warn":
            self._logger.warning(message)
        elif message_type == "error":
            self._logger.error(message)

        return "Success"

    def is_blueprint_csrf_protected(self):
        return True

    def on_shutdown(self):
        close_browser()
        if self.os == "Linux":
            stop_webssh()

    def start_heartbeat_timer(self):
        self.heartbeat_timer = RepeatedTimer(
            self.heartbeat_interval, self.check_heartbeat
        )
        self.heartbeat_timer.start()

    def check_heartbeat(self):
        if time() - self.last_heartbeat_time > self.heartbeat_interval:
            self._logger.info("Heartbeat timed out! Restarting browser...")
            restart_browser(
                self.os, self.api_key, self.peer_ID, self.master_peer_id, self.base_url
            )

    def check_api_key_validity(self, api_key):
        if api_key:
            response = requests.get(
                f"{self.base_url}/api/plugin/appkeys", headers={"X-API-KEY": api_key}
            )
            if response.ok:
                return True
            else:
                return False

    def update_nf_profile(self):
        try:
            with open(
                os.path.join(self.get_plugin_data_folder(), "nf_profile.json"), "r+"
            ) as f:
                nf_profile = json.loads(f.read())
                nf_profile["api_key"] = self.api_key
                nf_profile["peer_ID"] = self.peer_ID
                nf_profile["master_peer_id"] = self.master_peer_id
                nf_profile["showBrowserGUI"] = self.showBrowserGUI
                f.seek(0)
                json.dump(nf_profile, f)
                f.truncate()

        except Exception as e:
            self._logger.warning(e, exc_info=True)

    def save_bed_levelling_data(self, data):
        self._logger.info("Saving bed levelling data")
        try:
            with open(
                os.path.join(self.get_plugin_data_folder(), "bed_levelling_data.json"),
                "w+",
            ) as f:
                json.dump(data, f)

        except Exception as e:
            self._logger.warning(e, exc_info=True)

    def send_api_key(self):
        self._plugin_manager.send_plugin_message(
            self._identifier, {"api_key": self.api_key}
        )

    def send_show_browser_gui(self):
        self._plugin_manager.send_plugin_message(
            self._identifier, {"showBrowserGUI": self.showBrowserGUI}
        )

    def send_restart_server_modal(self):
        self._plugin_manager.send_plugin_message(
            self._identifier, {"getRestartServerModal": self.show_restart_server_modal}
        )

    def send_server_mode(self):
        self._plugin_manager.send_plugin_message(
            self._identifier, {"serverMode": self.restart_mode}
        )

    def send_proxy_server_started(self):
        self._plugin_manager.send_plugin_message(
            self._identifier, {"startProxyServer": True}
        )

    def send_master_peer_id(self):
        self._plugin_manager.send_plugin_message(
            self._identifier, {"masterPeerID": self.master_peer_id}
        )

    def load_nf_profile(self, nf_profile_name: str = ""):
        nf_profile = {}

        if not nf_profile_name:
            nf_profile_name = "nf_profile.json"

        try:
            with open(
                os.path.join(self.get_plugin_data_folder(), nf_profile_name), "r"
            ) as f:
                nf_profile = json.loads(f.read())
        except IOError as e:
            if e.errno == 2:
                api_key = ""
                master_peer_id = ""
                # This will be true if the plugin is created using octoprint_deploy
                if os.path.isfile(
                    os.path.join(self.get_plugin_data_folder(), "apiKey.txt")
                ):
                    with open(
                        os.path.join(self.get_plugin_data_folder(), "apiKey.txt"), "r"
                    ) as f:
                        self._logger.info("Loading API key from apiKey.txt")
                        api_key = f.read().strip()
                if os.path.isfile(
                    os.path.join(self.get_plugin_data_folder(), "masterDeviceID.txt")
                ):
                    with open(
                        os.path.join(
                            self.get_plugin_data_folder(), "masterDeviceID.txt"
                        ),
                        "r",
                    ) as f:
                        self._logger.info(
                            "Loading master peer ID from masterDeviceID.txt"
                        )
                        master_peer_id = f.read().strip()
                with open(
                    os.path.join(self.get_plugin_data_folder(), "nf_profile.json"), "w"
                ) as f:
                    nf_profile = {
                        "peer_ID": str(uuid4()),
                        "api_key": api_key,
                        "master_peer_id": master_peer_id,
                        "showBrowserGUI": False,
                    }
                    json.dump(nf_profile, f)

        self.peer_ID = nf_profile["peer_ID"]

        if self.check_api_key_validity(nf_profile["api_key"]):
            self.api_key = nf_profile["api_key"]
        else:
            self._logger.warning("API Key not valid for NanoFactory")
        self.master_peer_id = nf_profile["master_peer_id"]
        if "showBrowserGUI" not in nf_profile:
            nf_profile["showBrowserGUI"] = False
        else:
            self.showBrowserGUI = nf_profile["showBrowserGUI"]

    # ~~ AssetPlugin mixin

    def get_assets(self):
        return {
            "js": ["js/octoprint_NanoFactory.js"],
            "css": ["css/octoprint_NanoFactory.css"],
        }

    # ~~ Softwareupdate hook

    def get_update_information(self):
        # Define the configuration for your plugin to use with the Software Update
        # Plugin here. See https://docs.octoprint.org/en/master/bundledplugins/softwareupdate.html
        # for details.
        return {
            "Nanofactory": {
                "displayName": "Nanofactory",
                "displayVersion": self._plugin_version,
                # version check: github repository
                "type": "github_release",
                "user": "Printerverse",
                "repo": "Octoprint-NanoFactory",
                "current": self._plugin_version,
                "stable_branch": {
                    "name": "Stable",
                    "branch": "main",
                    "commitish": ["main"],
                },
                # update method: pip
                "pip": "https://github.com/Printerverse/Octoprint-NanoFactory/archive/main.zip",
            }
        }


# The plugin's python package, should be "octoprint_<plugin identifier>", has to be unique
__plugin_package__ = "octoprint_NanoFactory"


__plugin_pythoncompat__ = ">=3,<4"  # Only Python 3


def __plugin_load__():
    global __plugin_implementation__
    global __plugin_name__

    __plugin_implementation__ = NanofactoryPlugin()
    __plugin_name__ = "NanoFactory"

    global __plugin_hooks__
    __plugin_hooks__ = {
        "octoprint.plugin.softwareupdate.check_config": __plugin_implementation__.get_update_information,
        "octoprint.comm.protocol.gcode.received": BedLevelling.process_gcode,
    }
