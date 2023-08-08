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
flag_for_headless = "--headless "

kill_pid_command_windows = "taskkill /F /PID "
kill_pid_command_linux = "kill -9 "
kill_chrome_command_windows = "taskkill /f /im chrome.exe 2> nul"
kill_msedge_command_windows = "taskkill /f /im msedge.exe 2> nul"
kill_chromium_browser_command_linux = "killall chromium-browser"
kill_chromium_command_linux = "killall chromium"
kill_chrome_command_linux = "killall chrome"

browser_thread: threading.Thread = None
ssh_server_thread: threading.Thread = None
ssh_server_pid: int = None


def get_browser_flags(check_display=False):
    browser_flags = flag_for_headless + flags + user_data_directory_path

    if check_display:
        # if is_display_available(operating_system):
        browser_flags = browser_flags.replace(flag_for_headless, "")
        # else:
        #     from . import __plugin_implementation__ as plugin
        #     plugin.updateShowBrowserGUI(False)
    return browser_flags


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

# type: ignore
def kill_all_browsers(operating_system: Literal["Windows", "Darwin", "Linux"] = ""):
    from . import __plugin_implementation__ as plugin

    if operating_system == "Windows":
        subprocess.Popen(kill_chrome_command_windows,
                         start_new_session=True, shell=True)
        subprocess.Popen(kill_msedge_command_windows,
                         start_new_session=True, shell=True)

    elif operating_system == "Linux":
        command = "pkill -f chrom"
        plugin._logger.info(f"Running command: {command}")  # type: ignore
        result = subprocess.run(
            command.split(), capture_output=True, text=True)
        if result.returncode == 0:
            plugin._logger.info(  # type: ignore
                "Command executed successfully.")
            plugin._logger.info("Output:")  # type: ignore
            plugin._logger.info(result.stdout)  # type: ignore
        else:
            plugin._logger.info(  # type: ignore
                "Command failed with return code:", result.returncode)
            plugin._logger.info("Error output:")  # type: ignore
            plugin._logger.info(result.stderr)  # type: ignore
    else:
        # If no operating system is specified, kill all browsers
        kill_all_browsers("Windows")
        kill_all_browsers("Linux")


def restart_browser(
    operating_system: Literal["Windows", "Darwin", "Linux"],
    api_key: str,
    peer_ID: str,
    master_peer_id: str,
    base_url: str
):
    close_browser()
    time.sleep(1)
    start_browser_thread(operating_system, api_key,
                         peer_ID, master_peer_id, base_url)


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


def start_browser_thread(
    operating_system: Literal["Windows", "Darwin", "Linux"],
    api_key: str,
    peer_ID: str,
    master_peer_id: str,
    base_url: str
):
    global browser_thread
    # Start the browser process in a separate thread
    # to prevent blocking
    browser_thread = threading.Thread(
        target=start_browser,
        args=(operating_system, api_key, peer_ID, master_peer_id, base_url),
    )
    # the thread is a daemon thread so that it stops automatically on exit
    browser_thread.daemon = True
    browser_thread.start()


def start_browser(
    operating_system: Literal["Windows", "Darwin", "Linux"],
    api_key: str,
    peer_ID: str,
    master_peer_id: str,
    base_url: str,
):
    from . import __plugin_implementation__ as plugin

    url = "file:///{}?apiKey={}&peerID={}&masterPeerID={}&baseURL={}&mode={}".format(
        index_html_file_path,
        api_key,
        peer_ID,
        master_peer_id,
        urllib.parse.quote(base_url, safe=""),
        plugin.restart_mode
    )

    browser_flags = get_browser_flags(plugin.showBrowserGUI)

    if operating_system == "Windows":
        try:
            browser_path = get_browser_path(operating_system)

            if browser_path:
                process = psutil.Popen(
                    [browser_path, url] +
                    browser_flags.split(" "),
                    stdin=subprocess.PIPE,
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.PIPE,
                )
                plugin._logger.info(  # type: ignore
                    "NanoFactory browser started with PID: "
                    + str(process.as_dict()["pid"])
                )
                plugin.pid = process.as_dict()["pid"]

            else:
                if get_windows_chrome_version():
                    subprocess.run(
                        "start chrome {} {}".format(
                            url, browser_flags),
                        shell=True,
                    )
                else:
                    subprocess.run(
                        "start msedge {} {}".format(
                            url, browser_flags),
                        shell=True,
                    )

        except Exception as e:

            plugin._logger.error(  # type: ignore
                "Error while opening browser.")  # type: ignore
            plugin._logger.error(e, exc_info=True)  # type: ignore

    if operating_system == "Linux":
        try:
            browser_path = get_browser_path(operating_system)

            if not browser_path:

                plugin._logger.error(  # type: ignore
                    linux_chrome_path_1 + " or " + linux_chrome_path_2 + " not found."
                )
                return

            process = psutil.Popen(
                [browser_path, url] +
                (browser_flags).split(" "),
                stdin=subprocess.PIPE,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                start_new_session=True,
            )
            plugin._logger.info(  # type: ignore
                "NanoFactory browser started with PID: "
                + str(process.as_dict()["pid"])
            )
            plugin.pid = process.as_dict()["pid"]

        except Exception as e:
            plugin._logger.warning(  # type: ignore
                "Error while opening browser using psutil.")  # type: ignore
            plugin._logger.warning(e, exc_info=True)  # type: ignore
            plugin._logger.warning(  # type: ignore
                "Checking if the browser is running...")  # type: ignore
            command = "pgrep -f chrom"
            result = subprocess.run(
                command.split(), capture_output=True, text=True)
            if result.returncode == 0:
                plugin._logger.warning(  # type: ignore
                    "Output of pgrep -f chrom:")  # type: ignore
                plugin._logger.warning(result.stdout)  # type: ignore
                plugin._logger.warning(  # type: ignore
                    "Browser is already running")  # type: ignore
            else:
                # this is fine, it just means that the browser is not running
                plugin._logger.warning(  # type: ignore
                    "pgrep -f chrom failed with return code:")
                plugin._logger.warning(result.returncode)  # type: ignore
                plugin._logger.warning(  # type: ignore
                    "Trying to start the browser using subprocess..."
                )
                try:
                    browser_path = get_browser_path(operating_system)
                    subprocess.run(
                        [browser_path, url] +
                        (browser_flags).split(" "),
                        stdin=subprocess.PIPE,
                        stdout=subprocess.PIPE,
                        stderr=subprocess.PIPE,
                        start_new_session=True,
                    )
                except Exception as e:
                    plugin._logger.error(  # type: ignore
                        "Error while opening browser using subprocess."
                    )
                    plugin._logger.error(e, exc_info=True)  # type: ignore


def close_browser():
    from . import __plugin_implementation__ as plugin

    try:
        if plugin.pid:
            if plugin.os == "Windows":
                subprocess.run(
                    kill_pid_command_windows + str(plugin.pid),
                    shell=True,
                    start_new_session=True
                )
            elif plugin.os == "Linux":
                subprocess.run(
                    kill_pid_command_linux + str(plugin.pid),
                    shell=True,
                    start_new_session=True
                )
        else:
            kill_all_browsers(plugin.os)
    except Exception as e:
        plugin._logger.warning(e, exc_info=True)  # type: ignore
        plugin._logger.info("Closing all browsers...")  # type: ignore
        kill_all_browsers(plugin.os)


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

        plugin._logger.warning(  # type: ignore
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


def is_display_available(operating_system: Literal["Windows", "Darwin", "Linux"]):
    if operating_system == "Windows":
        command = 'wmic path Win32_VideoController get Status /value'
        result = subprocess.run(
            command, capture_output=True, text=True, shell=True)

        # Check the output for the status
        if result.returncode == 0:
            output_lines = result.stdout.strip().split('\n')
            status_line = [
                line for line in output_lines if line.startswith('Status=')]
            if status_line:
                status = status_line[0].split('=')[1].strip()
                return status == 'OK'

        return False
    elif operating_system == "Linux":
        return os.environ.get("DISPLAY") is not None


def start_ssh_proxy_server_thread():
    if ssh_server_pid:
        from . import __plugin_implementation__ as plugin
        plugin.send_proxy_server_started()
        return

    global ssh_server_thread
    ssh_server_thread = threading.Thread(
        target=start_ssh_proxy_server)
    ssh_server_thread.daemon = True
    ssh_server_thread.start()


def start_ssh_proxy_server():
    global ssh_server_pid
    from . import __plugin_implementation__ as plugin

    path_to_proxy = os.path.dirname(os.path.realpath(__file__)) + '/proxy'

    try:
        if plugin.os == "Windows":
            path_to_proxy += ".exe"
            process = psutil.Popen(
                [path_to_proxy],
                stdin=subprocess.PIPE,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                start_new_session=True,
            )
        elif plugin.os == "Linux":
            # run the proxy in the path ./proxy file
            process = psutil.Popen(
                [path_to_proxy],
                stdin=subprocess.PIPE,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                start_new_session=True,
            )

        plugin._logger.info(  # type: ignore
            "SSH Proxy Server started with PID: "
            + str(process.as_dict()["pid"])
        )
        ssh_server_pid = process.as_dict()["pid"]
        plugin.send_proxy_server_started()

    except Exception as e:
        plugin._logger.warning(e, exc_info=True)


def stop_ssh_proxy_server():
    from . import __plugin_implementation__ as plugin

    if not ssh_server_pid:
        return

    try:
        if plugin.os == "Windows":
            subprocess.run(
                kill_pid_command_windows + str(ssh_server_pid),
                shell=True,
                start_new_session=True
            )
        if plugin.os == "Linux":
            subprocess.run(
                kill_pid_command_linux + str(ssh_server_pid),
                shell=True,
                start_new_session=True
            )
        plugin._logger.info(  # type: ignore
            "SSH Proxy Server with PID: "
            + str(ssh_server_pid) + " stopped"
        )
    except Exception as e:
        plugin._logger.warning(e, exc_info=True)
