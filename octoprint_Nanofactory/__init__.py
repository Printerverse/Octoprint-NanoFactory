# coding=utf-8
from __future__ import absolute_import

import json
import os
import re
import time
import webbrowser
from uuid import uuid4

import octoprint.plugin
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities


class NanofactoryPlugin(
    octoprint.plugin.StartupPlugin,
    octoprint.plugin.SettingsPlugin,
    octoprint.plugin.AssetPlugin,
    octoprint.plugin.TemplatePlugin,
):
    def initialize(self):
        self.peer_ID = "ac1c04db-daba-428d-af8a-954a9c10b3ba"
        self.browser = None

    # # ~~ StartupPlugin mixin
    def on_after_startup(self):
        # self.get_peer_id()
        self._logger.warning(f"Your peer ID is {self.peer_ID}")
        self.start_browser()

    # def get_peer_id(self):
    #     nf_profile = {}
    #     try:
    #         with open(
    #             os.path.join(self.get_plugin_data_folder(), "nf_profile.json"), "r"
    #         ) as f:
    #             nf_profile = json.loads(f.read())
    #     except IOError as e:
    #         if e.errno == 2:
    #             with open(
    #                 os.path.join(self.get_plugin_data_folder(), "nf_profile.json"), "w"
    #             ) as f:
    #                 nf_profile = {"peer_ID": str(uuid4())}
    #                 json.dump(nf_profile, f)

    #     self.peer_ID = nf_profile["peer_ID"]

    def start_browser(self):
        # browser = webbrowser.open(
        #     "file:///"
        #     + os.path.join(os.path.dirname(__file__), ".//static//js//index.html")
        # )
        chrome_options = Options()
        if os.path.isfile("/usr/bin/chromium-browser"):
            chrome_options.binary_location = "/usr/bin/chromium-browser"
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--headless")  # Ensure GUI is off
        chrome_options.add_argument("--use-fake-ui-for-media-stream")
        chrome_options.add_argument(
            "--unsafely-treat-insecure-origin-as-secure=http://localhost:5000"
        )
        chrome_options.add_argument("--disable-web-security")
        # To test memory optimization
        chrome_options.add_argument("--no-unsandboxed-zygote")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--disable-mipmap-generation")
        # d = DesiredCapabilities.CHROME
        # d["goog:loggingPrefs"] = {"browser": "ALL"}
        self.browser = webdriver.Chrome(options=chrome_options)

        self.browser.get(
            "file:///"
            + os.path.join(os.path.dirname(__file__), ".//static//js//index.html")
        )

    #     while self.browser:
    #         try:
    #             self.receive_data()
    #         except Exception as e:
    #             pass

    # def receive_data(self):
    #     for entry in self.browser.get_log("browser"):
    #         console_message: str = re.sub(
    #             r"console-api [0-9]+:[0-9]+ ", "", entry["message"], 1
    #         )

    #         self._logger.info(console_message)

    #     time.sleep(1)

    ##~~ AssetPlugin mixin

    def get_assets(self):
        # Define your plugin's asset files to automatically include in the
        # core UI here.
        return {
            "js": ["js/Octoprint-Nanofactory-V2.js"],
            "css": ["css/Octoprint-Nanofactory-V2.css"],
            "less": ["less/Octoprint-Nanofactory-V2.less"],
        }

    ##~~ Softwareupdate hook

    def get_update_information(self):
        # Define the configuration for your plugin to use with the Software Update
        # Plugin here. See https://docs.octoprint.org/en/master/bundledplugins/softwareupdate.html
        # for details.
        return {
            "Octoprint-Nanofactory-V2": {
                "displayName": "Octoprint-Nanofactory_V2",
                "displayVersion": self._plugin_version,
                # version check: github repository
                "type": "github_release",
                "user": "thakkaryash21",
                "repo": "Octoprint-Nanofactory",
                "current": self._plugin_version,
                # update method: pip
                "pip": "https://github.com/thakkaryash21/Octoprint-Nanofactory/archive/{target_version}.zip",
            }
        }


# If you want your plugin to be registered within OctoPrint under a different name than what you defined in setup.py
# ("OctoPrint-PluginSkeleton"), you may define that here. Same goes for the other metadata derived from setup.py that
# can be overwritten via __plugin_xyz__ control properties. See the documentation for that.
__plugin_name__ = "Nanofactory"


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
