import getpass
import os
import re
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
windows_chrome_path_1 = r"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
windows_chrome_path_2 = r"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
windows_edge_path = r"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"
linux_chrome_path_1 = "/usr/bin/chromium-browser"
linux_chrome_path_2 = "/usr/bin/chromium"

flags = "--allow-pre-commit-input --headless --disable-background-networking --disable-client-side-phishing-detection --disable-default-apps --disable-gpu --disable-hang-monitor --disable-logging --disable-mipmap-generation --disable-popup-blocking --disable-prompt-on-repost --disable-sync --disable-web-security --enable-blink-features=ShadowDOMV0 --log-level=3 --no-first-run --no-sandbox --no-service-autorun --no-unsandboxed-zygote --password-store=basic --profile-directory=Default --remote-debugging-port=0 --use-fake-ui-for-media-stream --use-mock-keychain "

kill_pid_command_windows = "taskkill /F /PID "
kill_pid_command_linux = "kill -9 "
kill_chrome_command_windows = "taskkill /F /IM chrome.exe >nul"
kill_msedge_command_windows = "taskkill /F /IM msedge.exe >nul"
kill_chromium_browser_command_linux = "killall chromium-browser"
kill_chromium_command_linux = "killall chromium"


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


def check_if_browser_is_installed(operating_system: Literal["Windows", "Darwin", "Linux"]):
    if operating_system == "Windows":
        chrome_version = get_windows_chrome_version()
        if chrome_version:
            return True
        edge_version = get_windows_edge_version()
        if edge_version:
            return True
        if os.path.isfile(windows_chrome_path_1) or os.path.isfile(windows_chrome_path_2) or os.path.isfile(windows_edge_path):
            return True

    if operating_system == "Linux":
        if os.path.isfile(linux_chrome_path_1) or os.path.isfile(linux_chrome_path_2):
            return True

    return False


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

        elif os.path.isfile(windows_edge_path):
            return windows_edge_path

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

    url = 'file:///{}?apiKey={}&peerID={}&masterPeerID={}'.format(
        index_html_file_path, api_key, peer_ID, master_peer_id)

    from . import __plugin_implementation__ as plugin

    if operating_system == "Windows":
        try:
            browser_path = get_browser_path(operating_system)

            if browser_path:
                process = psutil.Popen([browser_path, url] + flags.split(" "), stdin=subprocess.PIPE,
                                       stdout=subprocess.DEVNULL,  stderr=subprocess.PIPE)

                return process.as_dict()["pid"]

            else:
                if "chrome.exe" in browser_path:
                    subprocess.run(
                        "start chrome {} {}".format(url, flags), shell=True
                    )
                elif "msedge.exe" in browser_path:
                    subprocess.run(
                        "start msedge {} {}".format(url, flags), shell=True
                    )

        except Exception as e:
            from . import __plugin_implementation__ as plugin
            plugin._logger.error("Error while opening browser.")
            plugin._logger.error(e, exc_info=True)

    if operating_system == "Linux":
        try:
            browser_path = get_browser_path(operating_system)

            if not browser_path:
                from . import __plugin_implementation__ as plugin
                plugin._logger.error(
                    linux_chrome_path_1 + " or " + linux_chrome_path_2 + " not found.")
                return

            process = psutil.Popen([browser_path, url] + (flags).split(" "), stdin=subprocess.PIPE,
                                   stdout=subprocess.DEVNULL,  stderr=subprocess.PIPE)

            return process.as_dict()["pid"]

        except Exception as e:

            try:
                subprocess.run(
                    "{} {} {}".format(browser_path, url, flags), shell=True
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
                browser_path = get_browser_path(operating_system)
                if "chrome.exe" in browser_path:
                    subprocess.run(
                        kill_chrome_command_windows, shell=True)
                elif "msedge.exe" in browser_path:
                    subprocess.run(
                        kill_msedge_command_windows, shell=True)

            if operating_system == "Linux":
                subprocess.run(kill_chromium_browser_command_linux, shell=True)
                subprocess.run(kill_chromium_command_linux, shell=True)

    except Exception as e:
        plugin._logger.warning(e, exc_info=True)


def extract_version_registry(output):
    try:
        google_version = ''
        for letter in output[output.rindex('DisplayVersion    REG_SZ') + 24:]:
            if letter != '\n':
                google_version += letter
            else:
                break
        return (google_version.strip())
    except TypeError:
        return


def extract_version_folder():
    # Check if the Chrome folder exists in the x32 or x64 Program Files folders.
    for i in range(2):
        path = 'C:\\Program Files' + \
            (' (x86)' if i else '') + '\\Google\\Chrome\\Application'
        if os.path.isdir(path):
            paths = [f.path for f in os.scandir(path) if f.is_dir()]
            for path in paths:
                filename = os.path.basename(path)
                pattern = '\d+\.\d+\.\d+\.\d+'
                match = re.search(pattern, filename)
                if match and match.group():
                    # Found a Chrome version.
                    return match.group(0)

    return None


def get_windows_edge_version():
    version = None

    try:
        stream = os.popen(
            'powershell.exe "(Get-AppxPackage Microsoft.MicrosoftEdge).Version"')
        output = stream.read()
        if output:
            version = output.strip()

    except Exception as e:
        from . import __plugin_implementation__ as plugin
        plugin._logger.warning(
            "Error while getting ms-edge version.", exc_info=True)

    return version


def get_windows_chrome_version():
    version = None
    install_path = None

    try:
        try:
            # Try registry key.
            stream = os.popen(
                'reg query "HKLM\\SOFTWARE\\Wow6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Google Chrome"')
            output = stream.read()
            version = extract_version_registry(output)
        except Exception as ex:
            # Try folder path.
            version = extract_version_folder()
    except Exception as ex:
        print(ex)

    version = os.popen(f"{install_path} --version").read().strip(
        'Google Chrome ').strip() if install_path else version

    return version
