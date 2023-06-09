import getpass
import os
import re
import subprocess
import threading
import time
import urllib.parse
from pathlib import Path

import psutil
import yaml
from typing_extensions import Literal

from octoprint.server import settings

# CONSTANTS:
index_html_file_path = os.path.join(
    os.path.dirname(os.path.realpath(__file__)),
    "static",
    "js",
    "index.html",
)
windows_chrome_path_1 = r"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
windows_chrome_path_2 = (
    r"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
)
windows_edge_path = r"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"
linux_chrome_path_1 = "/usr/bin/chromium-browser"
linux_chrome_path_2 = "/usr/bin/chromium"

user_data_directory_path = ""
flags = "--allow-pre-commit-input --disable-background-networking --disable-client-side-phishing-detection --disable-default-apps --disable-gpu --disable-hang-monitor --disable-logging --disable-mipmap-generation --disable-popup-blocking --disable-prompt-on-repost --disable-sync --disable-web-security --enable-blink-features=ShadowDOMV0 --log-level=3 --no-first-run --no-sandbox --no-service-autorun --no-unsandboxed-zygote --password-store=basic --profile-directory=Default --remote-debugging-port=0 --use-fake-ui-for-media-stream --use-mock-keychain --user-data-dir="

kill_pid_command_windows = "taskkill /F /PID "
kill_pid_command_linux = "kill -9 "
kill_chrome_command_windows = "taskkill /F /IM chrome.exe >nul"
kill_msedge_command_windows = "taskkill /F /IM msedge.exe >nul"
kill_chromium_browser_command_linux = "killall chromium-browser"
kill_chromium_command_linux = "killall chromium"
kill_chrome_command_linux = "killall chrome"


def get_browser_flags():
    return flags + user_data_directory_path


def initialize_user_data_directory(
    operating_system: Literal["Windows", "Darwin", "Linux"]
):
    global user_data_directory_path
    if operating_system == "Windows":
        user_data_directory_path = r"C:\NanoFactory"
    elif operating_system == "Linux":
        if getpass.getuser() == "root":
            user_data_directory_path = r"/root/NanoFactory"
        else:
            user_data_directory_path = r"/home/{}/NanoFactory".format(
                getpass.getuser())
    if not os.path.isdir(user_data_directory_path):
        os.mkdir(user_data_directory_path)


def check_cors_for_octoprint_api():
    cors_enabled = settings().get(["api", "allowCrossOrigin"])
    return not cors_enabled


def check_if_browser_is_installed(
    operating_system: Literal["Windows", "Darwin", "Linux"]
):
    if operating_system == "Windows":
        chrome_version = get_windows_chrome_version()
        if chrome_version:
            return True
        edge_version = get_windows_edge_version()
        if edge_version:
            return True
        if (
            os.path.isfile(windows_chrome_path_1)
            or os.path.isfile(windows_chrome_path_2)
            or os.path.isfile(windows_edge_path)
        ):
            return True

    if operating_system == "Linux":
        if os.path.isfile(linux_chrome_path_1) or os.path.isfile(linux_chrome_path_2):
            return True

    return False


# I would add union types here but this version of python doesn't support them
# so please ignore the type errors
def kill_all_browsers(operating_system: Literal["Windows", "Darwin", "Linux"] = ""):
    from . import __plugin_implementation__ as plugin

    if operating_system == "Windows":
        subprocess.Popen(kill_chrome_command_windows, start_new_session=True)
        subprocess.Popen(kill_msedge_command_windows, start_new_session=True)
    elif operating_system == "Linux":
        command = "pkill -f chrom"
        plugin._logger.info(f"Running command: {command}")
        result = subprocess.run(
            command.split(), capture_output=True, text=True)
        if result.returncode == 0:
            plugin._logger.info("Command executed successfully.")
            plugin._logger.info("Output:")
            plugin._logger.info(result.stdout)
        else:
            plugin._logger.info(
                "Command failed with return code:", result.returncode)
            plugin._logger.info("Error output:")
            plugin._logger.info(result.stderr)
    elif operating_system == "Darwin":
        command = "pkill -f chrom"
        plugin._logger.info(f"Running command: {command}")
        result = subprocess.run(
            command.split(), capture_output=True, text=True)
        if result.returncode == 0:
            plugin._logger.info("Command executed successfully.")
            plugin._logger.info("Output:")
            plugin._logger.info(result.stdout)
        else:
            plugin._logger.info(
                "Command failed with return code:", result.returncode)
            plugin._logger.info("Error output:")
            plugin._logger.info(result.stderr)
    else:
        # If no operating system is specified, kill all browsers
        kill_all_browsers("Windows")
        kill_all_browsers("Linux")
        kill_all_browsers("Darwin")


def restart_browser(
    operating_system: Literal["Windows", "Darwin", "Linux"],
    api_key: str,
    peer_ID: str,
    master_peer_id: str,
    browser_process: psutil.Popen,
    base_url: str,
):
    from . import __plugin_implementation__ as plugin

    kill_all_browsers(operating_system)
    # Start the browser process in a separate thread
    # to prevent blocking
    browser_thread = threading.Thread(
        target=start_browser,
        args=(operating_system, api_key, peer_ID, master_peer_id, base_url),
    )
    browser_thread.start()


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


def start_browser(
    operating_system: Literal["Windows", "Darwin", "Linux"],
    api_key: str,
    peer_ID: str,
    master_peer_id: str,
    base_url: str,
):
    url = "file:///{}?apiKey={}&peerID={}&masterPeerID={}&baseURL={}".format(
        index_html_file_path,
        api_key,
        peer_ID,
        master_peer_id,
        urllib.parse.quote(base_url, safe=""),
    )

    from . import __plugin_implementation__ as plugin

    if operating_system == "Windows":
        try:
            browser_path = get_browser_path(operating_system)

            if browser_path:
                process = psutil.Popen(
                    [browser_path, url] + get_browser_flags().split(" "),
                    stdin=subprocess.PIPE,
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.PIPE,
                )
                plugin._logger.info(
                    "NanoFactory browser started with PID: "
                    + str(process.as_dict()["pid"])
                )
                return process

            else:
                if get_windows_chrome_version():
                    subprocess.run(
                        "start chrome {} {}".format(url, get_browser_flags()),
                        shell=True,
                    )
                else:
                    subprocess.run(
                        "start msedge {} {}".format(url, get_browser_flags()),
                        shell=True,
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
                    linux_chrome_path_1 + " or " + linux_chrome_path_2 + " not found."
                )
                return

            process = psutil.Popen(
                [browser_path, url] + (get_browser_flags()).split(" "),
                stdin=subprocess.PIPE,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                start_new_session=True,
            )
            return process

        except Exception as e:
            plugin._logger.warning("Error while opening browser using psutil.")
            plugin._logger.warning(e, exc_info=True)
            plugin._logger.warning("Checking if the browser is running...")
            command = "pgrep -f chrom"
            result = subprocess.run(
                command.split(), capture_output=True, text=True)
            if result.returncode == 0:
                plugin._logger.warning("Output of pgrep -f chrom:")
                plugin._logger.warning(result.stdout)
                plugin._logger.warning("Browser is already running")
            else:
                # this is fine, it just means that the browser is not running
                plugin._logger.warning(
                    "pgrep -f chrom failed with return code:")
                plugin._logger.warning(result.returncode)
                plugin._logger.warning(
                    "Trying to start the browser using subprocess..."
                )
                try:
                    browser_path = get_browser_path(operating_system)
                    subprocess.run(
                        [browser_path, url] + (get_browser_flags()).split(" "),
                        stdin=subprocess.PIPE,
                        stdout=subprocess.PIPE,
                        stderr=subprocess.PIPE,
                        start_new_session=True,
                    )
                except Exception as e:
                    plugin._logger.error(
                        "Error while opening browser using subprocess."
                    )
                    plugin._logger.error(e, exc_info=True)


def close_browser(browser_process: psutil.Popen):
    from . import __plugin_implementation__ as plugin

    try:
        browser_process.terminate()
        plugin._logger.info("Browser closed.")
    except Exception as e:
        plugin._logger.warning(e, exc_info=True)
        plugin._logger.info("Closing all browsers...")
        kill_all_browsers()


def extract_version_registry(output):
    try:
        google_version = ""
        for letter in output[output.rindex("DisplayVersion    REG_SZ") + 24:]:
            if letter != "\n":
                google_version += letter
            else:
                break
        return google_version.strip()
    except TypeError:
        return


def extract_version_folder():
    # Check if the Chrome folder exists in the x32 or x64 Program Files folders.
    for i in range(2):
        path = (
            "C:\\Program Files"
            + (" (x86)" if i else "")
            + "\\Google\\Chrome\\Application"
        )
        if os.path.isdir(path):
            paths = [f.path for f in os.scandir(path) if f.is_dir()]
            for path in paths:
                filename = os.path.basename(path)
                pattern = "\d+\.\d+\.\d+\.\d+"
                match = re.search(pattern, filename)
                if match and match.group():
                    # Found a Chrome version.
                    return match.group(0)

    return None


def get_windows_edge_version():
    version = None

    try:
        stream = os.popen(
            'powershell.exe "(Get-AppxPackage Microsoft.MicrosoftEdge).Version"'
        )
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
                'reg query "HKLM\\SOFTWARE\\Wow6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Google Chrome"'
            )
            output = stream.read()
            version = extract_version_registry(output)
        except Exception as ex:
            # Try folder path.
            version = extract_version_folder()
    except Exception as ex:
        print(ex)

    version = (
        os.popen(
            f"{install_path} --version").read().strip("Google Chrome ").strip()
        if install_path
        else version
    )

    return version
