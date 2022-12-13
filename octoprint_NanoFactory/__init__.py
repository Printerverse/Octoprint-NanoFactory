# coding=utf-8
from __future__ import absolute_import

import getpass
import json
import requests
import os
import subprocess
import psutil
import platform
import time
from flask import request
from uuid import uuid4

import octoprint.plugin
from .BedLevelling import process_gcode


class NanofactoryPlugin(
    octoprint.plugin.StartupPlugin,
    octoprint.plugin.SettingsPlugin,
    octoprint.plugin.AssetPlugin,
    octoprint.plugin.TemplatePlugin,
    octoprint.plugin.SimpleApiPlugin,
    octoprint.plugin.ShutdownPlugin,
    octoprint.plugin.BlueprintPlugin
):
    def initialize(self):
        self.peer_ID = ""
        self.api_key: str = ""
        self.master_peer_id: str = ""
        self.pid: str = ""

    # # ~~ StartupPlugin mixin
    # def on_startup(self, host, port):

    def on_after_startup(self):
        self.load_nf_profile()
        self.check_chrome_data_folder()
        if self.api_key and self.peer_ID:
            self.start_browser()

    # # ~~ SimpleApiPlugin mixin
    def get_api_commands(self):
        return {
            "getPeerID": [],
            "getAPIKey": [],
            "saveAPIKEY": ["api_key"],
            "getMasterPeerID": [],
            "saveMasterPeerID": ["masterPeerID"],
            "restartNanoFactoryApp": [],
        }

    def on_api_command(self, command, data):
        if command == "saveAPIKEY":
            self.api_key = data["api_key"]
            try:
                with open(
                    os.path.join(self.get_plugin_data_folder(),
                                 "nf_profile.json"), "r+"
                ) as f:
                    nf_profile = json.loads(f.read())
                    nf_profile["api_key"] = self.api_key
                    f.seek(0)
                    json.dump(nf_profile, f)
                    f.truncate()

                self.restart_browser()

            except Exception as e:
                self._logger.warning(e, exc_info=True)

        elif command == "getAPIKey":
            self.send_api_key()

        elif command == "getPeerID":
            self._plugin_manager.send_plugin_message(
                self._identifier, {"peerID": self.peer_ID}
            )

        elif command == "getMasterPeerID":
            self.send_master_peer_id()

        elif command == "saveMasterPeerID":
            self.save_master_peer_id(data["masterPeerID"], True)

        elif command == "restartNanoFactoryApp":
            self.restart_browser()

    @octoprint.plugin.BlueprintPlugin.route("/save_master_peer_id", methods=["POST"])
    @octoprint.plugin.BlueprintPlugin.csrf_exempt()
    def save_master_peer_id_endpoint(self):
        master_peer_id = request.args.get("master_peer_id", None)
        if master_peer_id:
            self.save_master_peer_id(master_peer_id, False)
        return "Success"

    @octoprint.plugin.BlueprintPlugin.route("/peer_connection_error", methods=["GET"])
    @octoprint.plugin.BlueprintPlugin.csrf_exempt()
    def send_peer_error_message_to_frontend(self):
        retry_connection_timeout = request.args.get("timeout", 15)
        self._plugin_manager.send_plugin_message(
            self._identifier, {
                "peer_error": "NanoFactory could not connect to the peer server. We will automatically retry connection in " + retry_connection_timeout + " seconds"}
        )
        return "Success"

    @octoprint.plugin.BlueprintPlugin.route("/peer_connection_success", methods=["GET"])
    @octoprint.plugin.BlueprintPlugin.csrf_exempt()
    def send_peer_success_message_to_frontend(self):
        self._plugin_manager.send_plugin_message(
            self._identifier, {
                "peer_success": "NanoFactory connected to the peer server successfully"}
        )
        return "Success"

    @octoprint.plugin.BlueprintPlugin.route("/initiate_bed_levelling", methods=["GET"])
    @octoprint.plugin.BlueprintPlugin.csrf_exempt()
    def start_bed_levelling(self):
        if not BedLevelling.processing:
            BedLevelling.mesh = []
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
                with open(os.path.join(self.get_plugin_data_folder(), "bed_levelling_data.json"), "r") as f:
                    data = json.loads(f.read())
                    return {"data": data}
            except Exception as e:
                return {}

    def is_blueprint_csrf_protected(self):
        return True

    def on_shutdown(self):
        self.close_browser()

    def check_api_key_validity(self, api_key):
        if api_key:
            response = requests.get(
                "http://localhost:5000/api/plugin/appkeys", headers={"X-API-KEY": api_key})
            if response.ok:
                return True
            else:
                return False

    def restart_browser(self):
        self.close_browser()
        time.sleep(1)
        self.start_browser()

    def save_master_peer_id(self, master_peer_id: str, restart_browser: bool):
        self.master_peer_id = master_peer_id
        try:
            with open(
                os.path.join(self.get_plugin_data_folder(),
                             "nf_profile.json"), "r+"
            ) as f:
                nf_profile = json.loads(f.read())
                nf_profile["master_peer_id"] = self.master_peer_id
                f.seek(0)
                json.dump(nf_profile, f)
                f.truncate()

        except Exception as e:
            self._logger.warning(e, exc_info=True)

        self.send_master_peer_id()

        if restart_browser:
            self.restart_browser()

    def save_bed_levelling_data(self, data):
        try:
            with open(os.path.join(self.get_plugin_data_folder(), "bed_levelling_data.json"), "w+") as f:
                json.dump(data, f)

        except Exception as e:
            self._logger.warning(
                "Error while saving bed levelling data: "+e, exc_info=True)

    def send_api_key(self):
        self._plugin_manager.send_plugin_message(
            self._identifier, {"api_key": self.api_key}
        )

    def send_master_peer_id(self):
        self._plugin_manager.send_plugin_message(
            self._identifier, {"masterPeerID": self.master_peer_id}
        )

    def check_chrome_data_folder(self):
        if platform.system() == "Windows":
            if not os.path.isdir("C:\\temp\\chrome-data"):
                try:
                    os.mkdir("C:\\temp")
                    os.mkdir("C:\\temp\\chrome-data")
                except Exception as e:
                    self._logger.warning(e)
        else:
            if not os.path.isdir(f"/home/{getpass.getuser()}/chrome-data"):
                try:
                    os.mkdir(f"/home/{getpass.getuser()}/chrome-data")
                except Exception as e:
                    self._logger.warning(e)

    def load_nf_profile(self):
        nf_profile = {}
        try:
            with open(
                os.path.join(self.get_plugin_data_folder(),
                             "nf_profile.json"), "r"
            ) as f:
                nf_profile = json.loads(f.read())
        except IOError as e:
            if e.errno == 2:
                with open(
                    os.path.join(self.get_plugin_data_folder(),
                                 "nf_profile.json"), "w"
                ) as f:
                    nf_profile = {"peer_ID": str(
                        uuid4()), "api_key": "", "master_peer_id": ""}
                    json.dump(nf_profile, f)

        self.peer_ID = nf_profile["peer_ID"]

        if self.check_api_key_validity(nf_profile["api_key"]):
            self.api_key = nf_profile["api_key"]
        else:
            self._logger.warning("NanoFactory API Key not valid")

        self.master_peer_id = nf_profile["master_peer_id"]

    def start_browser(self):
        path = os.path.join(
            os.path.dirname(os.path.realpath(__file__)),
            "static",
            "js",
            "index.html",
        )

        FNULL = open(os.devnull, 'w')

        url = f'file:///{path}?apiKey={self.api_key}&peerID={self.peer_ID}&masterPeerID={self.master_peer_id}'

        if platform.system() == "Windows":
            try:
                chrome_path = r"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
                process = psutil.Popen([chrome_path, url] + "--allow-pre-commit-input --disable-background-networking --disable-client-side-phishing-detection --disable-default-apps --disable-gpu --disable-hang-monitor --disable-logging --disable-mipmap-generation --disable-popup-blocking --disable-prompt-on-repost --disable-sync --disable-web-security --enable-blink-features=ShadowDOMV0 --log-level=3 --no-first-run --no-sandbox --no-service-autorun --no-unsandboxed-zygote --password-store=basic --profile-directory=Default --remote-debugging-port=0 --use-fake-ui-for-media-stream --use-mock-keychain --user-data-dir=C:\\temp\\chrome-data\\".split(" "), stdin=subprocess.PIPE,
                                       stdout=FNULL,  stderr=subprocess.PIPE)
                self._logger.info(process)
                self.pid = process.as_dict()["pid"]

            except Exception as e:
                self._logger.warning(
                    "Error while opening chrome using chrome path. Starting chrome using an alternative method.")
                self._logger.warning(e, exc_info=True)
                subprocess.run(
                    f"start chrome {url} --allow-pre-commit-input --disable-background-networking --disable-client-side-phishing-detection --disable-default-apps --disable-gpu --disable-hang-monitor --disable-logging --disable-mipmap-generation --disable-popup-blocking --disable-prompt-on-repost --disable-sync --disable-web-security --enable-blink-features=ShadowDOMV0 --log-level=3 --no-first-run --no-sandbox --no-service-autorun --no-unsandboxed-zygote --password-store=basic --profile-directory=Default --remote-debugging-port=0 --use-fake-ui-for-media-stream --use-mock-keychain --user-data-dir=C:\\temp\\chrome-data\\", shell=True
                )
        else:
            try:
                chrome_path = "/usr/bin/chromium-browser"
                user_data_directory_flag = f"--user-data-dir=/home/{getpass.getuser()}/chrome-data"
                process = psutil.Popen([chrome_path, url, user_data_directory_flag] + f"--headless --allow-pre-commit-input --disable-background-networking --disable-client-side-phishing-detection --disable-default-apps --disable-gpu --disable-hang-monitor --disable-logging --disable-mipmap-generation --disable-popup-blocking --disable-prompt-on-repost --disable-sync --disable-web-security --enable-blink-features=ShadowDOMV0 --log-level=3 --no-first-run --no-sandbox --no-service-autorun --no-unsandboxed-zygote --password-store=basic --profile-directory=Default --remote-debugging-port=0 --use-fake-ui-for-media-stream --use-mock-keychain".split(" "), stdin=subprocess.PIPE,
                                       stdout=FNULL,  stderr=subprocess.PIPE)
                self._logger.info(process)
                self.pid = process.as_dict()["pid"]

            except Exception as e:
                self._logger.warning(
                    "Error while opening chromium_browser using psutil. Trying with subprocess.")
                subprocess.run(
                    f"/usr/bin/chromium-browser {url} --headless --allow-pre-commit-input --disable-background-networking --disable-client-side-phishing-detection --disable-default-apps --disable-gpu --disable-hang-monitor --disable-logging --disable-mipmap-generation --disable-popup-blocking --disable-prompt-on-repost --disable-sync --disable-web-security --enable-blink-features=ShadowDOMV0 --log-level=3 --no-first-run --no-sandbox --no-service-autorun --no-unsandboxed-zygote --password-store=basic --profile-directory=Default --remote-debugging-port=0 --use-fake-ui-for-media-stream --use-mock-keychain --user-data-dir=/home/{getpass.getuser()}/chrome-data", shell=True
                )

    def close_browser(self):
        try:
            if self.pid:
                if platform.system() == "Windows":
                    subprocess.run("taskkill -F /PID " +
                                   str(self.pid), shell=True)
                else:
                    subprocess.run("kill -9 " + str(self.pid), shell=True)

            else:
                if platform.system() == "Windows":
                    subprocess.run(
                        "taskkill -F /IM chrome.exe >nul", shell=True)
                else:
                    subprocess.run("killall -9 chrome", shell=True)
        except Exception as e:
            self._logger.warning(e)
    # ~~ AssetPlugin mixin

    def get_assets(self):
        # Define your plugin's asset files to automatically include in the
        # core UI here.
        return {
            "js": ["js/NanoFactory.js"],
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
                "user": "thakkaryash21",
                "repo": "Octoprint-Nanofactory",
                "current": self._plugin_version,
                # update method: pip
                "pip": "https://github.com/Printerverse/Octoprint_Nanofactory/archive/main.zip",
            }
        }


# If you want your plugin to be registered within OctoPrint under a different name than what you defined in setup.py
# ("OctoPrint-PluginSkeleton"), you may define that here. Same goes for the other metadata derived from setup.py that
# can be overwritten via __plugin_xyz__ control properties. See the documentation for that.
__plugin_name__ = "NanoFactory"


# Set the Python version your plugin is compatible with below. Recommended is Python 3 only for all new plugins.
# OctoPrint 1.4.0 - 1.7.x run under both Python 3 and the end-of-life Python 2.
# OctoPrint 1.8.0 onwards only supports Python 3.
__plugin_pythoncompat__ = ">=3,<4"  # Only Python 3


def __plugin_load__():
    global __plugin_implementation__
    __plugin_implementation__ = NanofactoryPlugin()

    global __plugin_hooks__
    __plugin_hooks__ = {
        "octoprint.plugin.softwareupdate.check_config": __plugin_implementation__.get_update_information,
        "octoprint.comm.protocol.gcode.received": process_gcode,

    }
