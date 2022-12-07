# coding=utf-8
from __future__ import absolute_import

import getpass
import json
import os
import platform
import time
from uuid import uuid4

import octoprint.plugin
import sarge


class NanofactoryPlugin(
    octoprint.plugin.StartupPlugin,
    octoprint.plugin.SettingsPlugin,
    octoprint.plugin.AssetPlugin,
    octoprint.plugin.TemplatePlugin,
    octoprint.plugin.SimpleApiPlugin,
    octoprint.plugin.ShutdownPlugin
):
    def initialize(self):
        self.peer_ID = ""
        self.api_key: str = ""
        self.master_peer_id: str = ""

    # # ~~ StartupPlugin mixin
    def on_startup(self, host, port):
        self.load_nf_profile()

    def on_after_startup(self):
        self.check_chrome_data_folder()
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
            self.master_peer_id = data["masterPeerID"]
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

                self.restart_browser()
            except Exception as e:
                self._logger.warning(e, exc_info=True)

        elif command == "restartNanoFactoryApp":
            self.restart_browser()

    def on_shutdown(self):
        self.close_browser()

    def restart_browser(self):
        self.close_browser()
        time.sleep(1)
        self.start_browser()

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
        self.api_key = nf_profile["api_key"]
        self.master_peer_id = nf_profile["master_peer_id"]

    def start_browser(self):
        path = os.path.join(
            os.path.dirname(os.path.realpath(__file__)),
            "static",
            "js",
            "index.html",
        )

        if platform.system() == "Windows":
            file_path = f'"file:///{path}?apiKey={self.api_key}&peerID={self.peer_ID}&masterPeerID={self.master_peer_id}"'
            os.system(
                f"start chrome {file_path} --allow-pre-commit-input --disable-background-networking --disable-client-side-phishing-detection --disable-default-apps --disable-gpu --disable-hang-monitor --disable-logging --disable-mipmap-generation --disable-popup-blocking --disable-prompt-on-repost --disable-sync --disable-web-security  --enable-blink-features=ShadowDOMV0 --log-level=3 --no-first-run --no-sandbox --no-service-autorun --no-unsandboxed-zygote --password-store=basic --profile-directory=Default --remote-debugging-port=0 --use-fake-ui-for-media-stream --use-mock-keychain --user-data-dir=C:\\temp\\chrome-data\\"
            )
        else:
            sarge.run(
                f"/usr/bin/chromium-browser 'file:///{path}?apiKey={self.api_key}&peerID={self.peer_ID}' --allow-pre-commit-input --disable-background-networking --disable-client-side-phishing-detection --disable-default-apps --disable-gpu --disable-hang-monitor --disable-logging --disable-mipmap-generation --disable-popup-blocking --disable-prompt-on-repost --disable-sync --disable-web-security  --enable-blink-features=ShadowDOMV0 --log-level=3 --no-first-run --no-sandbox --no-service-autorun --no-unsandboxed-zygote --password-store=basic --profile-directory=Default --remote-debugging-port=0 --use-fake-ui-for-media-stream --use-mock-keychain --user-data-dir=/home/{getpass.getuser()}/chrome-data"
            )

    def close_browser(self):
        if platform.system() == "Windows":
            os.system("taskkill -F /IM chrome.exe >nul")
        else:
            sarge.run("killall -9 chrome")

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
        "octoprint.plugin.softwareupdate.check_config": __plugin_implementation__.get_update_information
    }
