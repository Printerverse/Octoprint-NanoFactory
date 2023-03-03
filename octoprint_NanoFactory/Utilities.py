import getpass
import os
import subprocess
import time

import psutil
import yaml
from typing_extensions import Literal

# CONSTANTS:
index_html_file_path = os.path.join(
    os.path.dirname(os.path.realpath(__file__)),
    "static",
    "js",
    "index.html",
)
windows_data_folder = "C:\\temp\\chrome-data"
linux_data_folder = "/home/{}/chrome-data".format(getpass.getuser())
windows_chrome_path_1 = r"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
windows_chrome_path_2 = r"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
linux_chrome_path_1 = "/usr/bin/chromium-browser"
linux_chrome_path_2 = "/usr/bin/chromium"

flags = "--allow-pre-commit-input --disable-background-networking --disable-client-side-phishing-detection --disable-default-apps --disable-gpu --disable-hang-monitor --disable-logging --disable-mipmap-generation --disable-popup-blocking --disable-prompt-on-repost --disable-sync --disable-web-security --enable-blink-features=ShadowDOMV0 --log-level=3 --no-first-run --no-sandbox --no-service-autorun --no-unsandboxed-zygote --password-store=basic --profile-directory=Default --remote-debugging-port=0 --use-fake-ui-for-media-stream --use-mock-keychain "
user_data_directory_flag = "--user-data-dir="

kill_pid_command_windows = "taskkill /F /PID "
kill_pid_command_linux = "kill -9 "
kill_chrome_command_windows = "taskkill /F /IM chrome.exe >nul"
kill_chromium_browser_command_linux = "killall chromium-browser"
kill_chromium_command_linux = "killall chromium"


def check_chrome_data_folder(operating_system: Literal["Windows", "Darwin", "Linux"]):
    try:
        if operating_system == "Windows":
            if not os.path.isdir(windows_data_folder):
                os.mkdir("C:\\temp")
                os.mkdir(windows_data_folder)

        if operating_system == "Linux":
            if not os.path.isdir(linux_data_folder):
                os.mkdir(linux_data_folder)

    except Exception as e:
        from . import __plugin_implementation__ as plugin
        plugin._logger.warning(e, exc_info=True)


def check_cors_for_octoprint_api():
    from . import __plugin_implementation__ as plugin
    plugin_data_folder = plugin.get_plugin_data_folder()

    paths = []

    if ("/" in plugin_data_folder):
        paths = plugin_data_folder.split("/")
        config_path = "/".join(paths[:-2])
    else:
        paths = plugin_data_folder.split("\\")
        config_path = "\\".join(paths[:-2])

    config = {}

    try:
        with open(os.path.join(config_path, "config.yaml"), "r") as f:
            config = yaml.safe_load(f)
    except Exception as e:
        plugin._logger.warning(e, exc_info=True)
        return True

    if "api" in config:
        if "allowCrossOrigin" not in config["api"]:
            return True

    return False


def check_browser_installed():
    # TODO: Check if browser is installed
    return True


def restart_browser(operating_system: Literal["Windows", "Darwin", "Linux"], api_key: str, peer_ID: str, master_peer_id: str, pid: int):
    close_browser(pid, operating_system)
    time.sleep(1)
    return start_browser(operating_system, api_key, peer_ID, master_peer_id)


def get_browser_path(operating_system: Literal["Windows", "Darwin", "Linux"]):
    if operating_system == "Windows":
        if os.path.isfile(windows_chrome_path_1):
            return windows_chrome_path_1

        elif os.path.isfile(windows_chrome_path_2):
            return windows_chrome_path_2
        else:
            return None

    if operating_system == "Linux":
        if os.path.isfile(linux_chrome_path_1):
            return linux_chrome_path_1
        elif os.path.isfile(linux_chrome_path_2):
            return linux_chrome_path_2
        else:
            return None


def start_browser(operating_system: Literal["Windows", "Darwin", "Linux"], api_key: str, peer_ID: str, master_peer_id: str):

    # FNULL = open(os.devnull, 'w')

    url = 'file:///{}?apiKey={}&peerID={}&masterPeerID={}'.format(
        index_html_file_path, api_key, peer_ID, master_peer_id)

    from . import __plugin_implementation__ as plugin

    if operating_system == "Windows":
        try:
            chrome_path = get_browser_path(operating_system)

            if chrome_path:
                process = psutil.Popen([chrome_path, url] + (flags+user_data_directory_flag+windows_data_folder).split(" "), stdin=subprocess.PIPE,
                                       stdout=subprocess.DEVNULL,  stderr=subprocess.PIPE)

                return process.as_dict()["pid"]

            else:
                subprocess.run(
                    "start chrome {} {}{}{}".format(url, flags, user_data_directory_flag, windows_data_folder), shell=True
                )

        except Exception as e:
            from . import __plugin_implementation__ as plugin
            plugin._logger.error("Error while opening chrome.")
            plugin._logger.error(e, exc_info=True)

    if operating_system == "Linux":
        try:
            chrome_path = get_browser_path(operating_system)

            if not chrome_path:
                from . import __plugin_implementation__ as plugin
                plugin._logger.error(
                    linux_chrome_path_1 + " or " + linux_chrome_path_2 + " not found.")
                return

            process = psutil.Popen([chrome_path, url] + (flags + user_data_directory_flag + linux_data_folder).split(" "), stdin=subprocess.PIPE,
                                   stdout=subprocess.DEVNULL,  stderr=subprocess.PIPE)

            return process.as_dict()["pid"]

        except Exception as e:

            try:
                subprocess.run(
                    "{} {} {}{}{}".format(chrome_path, url, flags, user_data_directory_flag, linux_data_folder), shell=True
                )
            except Exception as e:
                from . import __plugin_implementation__ as plugin
                plugin._logger.error("Error while opening chromium.")
                plugin._logger.error(e, exc_info=True)


def close_browser(pid: int, operating_system: Literal["Windows", "Darwin", "Linux"]):
    from . import __plugin_implementation__ as plugin

    try:
        if pid:

            if operating_system == "Windows":
                subprocess.run(kill_pid_command_windows +
                               str(pid), shell=True)
            if operating_system == "Linux":
                subprocess.run(kill_pid_command_linux + str(pid), shell=True)

        else:
            if operating_system == "Windows":
                subprocess.run(
                    kill_chrome_command_windows, shell=True)
            if operating_system == "Linux":
                subprocess.run(kill_chromium_browser_command_linux, shell=True)
                subprocess.run(kill_chromium_command_linux, shell=True)

    except Exception as e:
        plugin._logger.warning(e, exc_ifno=True)
