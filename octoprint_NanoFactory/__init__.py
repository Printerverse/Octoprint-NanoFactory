# coding=utf-8
from __future__ import absolute_import

import json
import os
from uuid import uuid4

import octoprint.plugin
from selenium import webdriver
from selenium.webdriver.chrome.options import Options


class NanofactoryPlugin(
    octoprint.plugin.StartupPlugin,
    octoprint.plugin.SettingsPlugin,
    octoprint.plugin.AssetPlugin,
    octoprint.plugin.TemplatePlugin,
    octoprint.plugin.SimpleApiPlugin,
):
    def initialize(self):
        self.peer_ID = ""
        self.api_key: str = None
        self.browser = None

    # # ~~ StartupPlugin mixin
    def on_startup(self, host, port):
        self.load_nf_profile()

    def on_after_startup(self):
        self.check_chrome_data_folder()
        self.start_browser()

    # # ~~ SimpleApiPlugin mixin
    def get_api_commands(self):
        return {"saveAPIKEY": ["api_key"], "getPeerID": [], "sendAPIKey": []}

    def on_api_command(self, command, data):
        if command == "saveAPIKEY":
            self.api_key = data["api_key"]
            self.browser.execute_script(f"window.apiKey = '{self.api_key}';")
            try:
                with open(
                    os.path.join(self.get_plugin_data_folder(), "nf_profile.json"), "r+"
                ) as f:
                    nf_profile = json.loads(f.read())
                    nf_profile["api_key"] = self.api_key
                    f.seek(0)
                    json.dump(nf_profile, f)
                    f.truncate()

            except Exception as e:
                self._logger.warning(e, exc_info=True)

        elif command == "getPeerID":
            self._plugin_manager.send_plugin_message(
                self._identifier, {"peerID": self.peer_ID}
            )

        elif command == "sendAPIKey":
            self.send_api_key()

    def send_api_key(self):
        self._plugin_manager.send_plugin_message(
            self._identifier, {"api_key": self.api_key}
        )

    def check_chrome_data_folder(self):
        if not os.path.isdir("./chrome-data"):
            try:
                os.mkdir("./chrome-data")
            except Exception as e:
                self._logger.warning(e)

    def load_nf_profile(self):
        nf_profile = {}
        try:
            with open(
                os.path.join(self.get_plugin_data_folder(), "nf_profile.json"), "r"
            ) as f:
                nf_profile = json.loads(f.read())
        except IOError as e:
            if e.errno == 2:
                with open(
                    os.path.join(self.get_plugin_data_folder(), "nf_profile.json"), "w"
                ) as f:
                    nf_profile = {"peer_ID": str(uuid4()), "api_key": ""}
                    json.dump(nf_profile, f)

        self.peer_ID = nf_profile["peer_ID"]
        self.api_key = nf_profile["api_key"]

    def start_browser(self):
        chrome_options = Options()
        if os.path.isfile("/usr/bin/chromium-browser"):
            chrome_options.binary_location = "/usr/bin/chromium-browser"
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--headless")  # Ensure GUI is off
        chrome_options.add_argument("--use-fake-ui-for-media-stream")
        chrome_options.add_argument("--disable-web-security")
        chrome_options.add_argument("--profile-directory=Default")
        chrome_options.add_argument("--user-data-dir=./chrome-data")
        # To test memory optimization
        chrome_options.add_argument("--no-unsandboxed-zygote")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--disable-mipmap-generation")
        # To turn off console logs
        chrome_options.add_argument("--disable-logging")
        chrome_options.add_argument("--log-level=3")
        self.browser = webdriver.Chrome(options=chrome_options)

        self.browser.get(
            "file:///"
            + os.path.join(os.path.dirname(__file__), ".//static//js//index.html")
        )

        initialize_peer_script = ""
        with open(
            os.path.join(os.path.dirname(__file__), "./static/js/initializePeer.js"),
            "r",
        ) as file:
            initialize_peer_script = file.read()
            assert initialize_peer_script

        self.browser.execute_script(initialize_peer_script, self.peer_ID, self.api_key)

    ##~~ AssetPlugin mixin

    def get_assets(self):
        # Define your plugin's asset files to automatically include in the
        # core UI here.
        return {
            "js": ["js/NanoFactory.js"],
        }

    ##~~ Softwareupdate hook

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
