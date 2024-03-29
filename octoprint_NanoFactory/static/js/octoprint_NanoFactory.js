/*
 * View model for Octoprint-NanoFactory
 *
 * Author: Printerverse
 * License: AGPLv3
 */
$(function () {
    function octoprint_NanoFactoryViewModel(parameters) {
        var self = this;

        self.APIKEY = ko.observable("")
        self.showSetupInstructions = ko.observable(true)
        self.peerID = ko.observable("")
        self.peerIDMessage = ko.observable("")
        self.masterPeerID = ko.observable("")
        self.nanoFactoryURL = ko.observable("")
        self.nanoFactoryActionButtonText = ko.observable("Add to NanoFactory")
        self.showBrowserGUI = ko.observable(false)

        self.isWindows = ko.observable(false)
        self.isLinux = ko.observable(false)
        self.isMac = ko.observable(false)

        self.updateLinuxAndInstallChromiumCommand = ko.observable("sudo apt update && sudo apt install chromium chromium-browser -y")
        self.showTabBarLinux = ko.observable(false)
        self.showAutomatedInstructionsLinux = ko.observable(false)
        self.showManualInstructionsLinux = ko.observable(true)
        self.hostname = ko.observable(window.location.hostname)

        self.showAPIKeyEditButton = ko.observable(true)
        self.showAPIKeySubmitButton = ko.observable(false)
        self.showMasterPeerIDEditButton = ko.observable(true)
        self.showMasterPeerIDSubmitButton = ko.observable(false)

        self.showClearNanoFactoryDatabaseModal = ko.observable(false)
        self.showRestartServerModal = ko.observable(false)

        self.restartMode = ko.observable("stable") // can be "stable" or "dev"

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        self.onDataUpdaterPluginMessage = function (plugin, data) {
            if (plugin == "octoprint_NanoFactory") {

                if (data["api_key"]) {
                    self.APIKEY(data["api_key"])


                    if (data["api_key"].length > 0) {
                        document.getElementById("api-key").disabled = true
                        self.handleShowAPIKeyEditButton()
                    } else {
                        document.getElementById("api-key").disabled = false
                        self.handleShowAPIKeySubmitButton()
                    }
                }

                if (data["masterPeerID"]) {
                    self.masterPeerID(data["masterPeerID"])

                    if (data["masterPeerID"].length > 0) {
                        document.getElementById("master-peer-id").disabled = true
                        self.nanoFactoryActionButtonText("Go to NanoFactory")

                        self.handleShowMasterPeerIDEditButton()
                    } else {
                        document.getElementById("master-peer-id").disabled = false
                        self.masterDeviceIDIconPath = ko.observable(self.submitIconPath)

                        self.handleShowMasterPeerIDSubmitButton()
                    }
                }

                if (data["peerID"]) {
                    self.peerID(data["peerID"])
                    self.peerIDMessage("Your Peer ID: " + data["peerID"])
                    self.nanoFactoryURL("https://nanofactory.printerverse.net/printer/" + data["peerID"])
                }

                if (data["peer_error"]) {
                    new PNotify({
                        title: "Error",
                        text: data["peer_error"],
                        type: "error"
                    });
                }

                if (data["peer_success"]) {
                    new PNotify({
                        title: "Success",
                        text: data["peer_success"],
                        type: "success"
                    });
                }

                if (data["cors_error"]) {
                    new PNotify({
                        title: "CORS Access Needed",
                        text: data["cors_error"],
                        type: "notice",
                        hide: false
                    });
                }

                // check for the key browser_installed in the data

                if ("browser_installed" in data) {
                    if (data["browser_installed"]) {
                        self.showSetupInstructions(false)
                    } else {
                        self.showSetupInstructions(true)
                        new PNotify({
                            title: "Browser Not Installed",
                            text: "NanoFactory could not find a browser installed. Please check the NanoFactory tab for setup instructions.",
                            type: "notice",
                            hide: false
                        });
                    }
                }

                if (data["operating_system"]) {
                    if (data["operating_system"] == "Windows") {
                        self.isWindows(true)
                    } else if (data["operating_system"] == "Linux") {
                        self.isLinux(true)
                        if (!(["localhost", "::", "127.0.0.1"].includes(self.hostname()))) {
                            self.showTabBarLinux(true)
                            self.showAutomatedInstructionsLinux(true)
                            self.showManualInstructionsLinux(false)
                        }
                    } else if (data["operating_system"] == "Darwin") {
                        self.isMac(true)
                    }
                }

                if ("showBrowserGUI" in data) {
                    self.showBrowserGUI(data["showBrowserGUI"])

                    if (self.showSetupInstructions())
                        return

                    let text = data["showBrowserGUI"] ? "NanoFactory Browser GUI is Enabled" : "NanoFactory Browser GUI is Disabled"
                    new PNotify({
                        text: text,
                        type: "notice",
                    })
                }

                if ("getRestartServerModal" in data) {
                    self.showRestartServerModal(data["getRestartServerModal"])

                    if (data["getRestartServerModal"])
                        new PNotify({
                            title: "Restart Device",
                            text: "Looks like NanoFactory Server has run into some issues. Please restart the device to continue using NanoFactory.",
                            type: "error",
                            hide: false
                        })
                }

                if ("serverMode" in data) {
                    if (data["serverMode"] === "dev")
                        $("#nanofactory-checkbox-for-plugin-mode").prop("checked", true)
                    else
                        $("#nanofactory-checkbox-for-plugin-mode").prop("checked", false)
                }
            }
        }


        self.onBeforeBinding = function () {
            OctoPrint.simpleApiCommand("octoprint_NanoFactory", "getOperatingSystem").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("octoprint_NanoFactory", "getAPIKey").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("octoprint_NanoFactory", "getMasterPeerID").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("octoprint_NanoFactory", "getPeerID").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("octoprint_NanoFactory", "getCors").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("octoprint_NanoFactory", "getBrowserInstalled").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("octoprint_NanoFactory", "getShowBrowserGUI").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("octoprint_NanoFactory", "getRestartServerModal").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("octoprint_NanoFactory", "getServerMode").done(function (response) { }).catch(error => { console.log(error) });
        }

        self.onStartupComplete = function () {
            setTimeout(() => {
                let apiKey = self.APIKEY()
                console.log("current apiKey: ", apiKey)
                if (!(apiKey.length > 0)) {
                    console.log("apiKey not found. Calling startAuthFlow")
                    self.startAuthFlow()
                    self.handleShowAPIKeySubmitButton()
                    self.apiKeyIconPath = ko.observable(self.submitIconPath)
                }

                // handle the checkbox on and off
                document.getElementById("nanofactory-checkbox-for-plugin-mode").addEventListener("change", function () {
                    if (this.checked) {
                        self.restartMode("dev")
                    } else {
                        self.restartMode("stable")
                    }

                    self.restartNanoFactoryApp()
                });


                document.getElementById("nanofactory-checkbox-for-browser-gui").addEventListener("change", function (event) {
                    self.updateShowBrowserGUI()
                });


            }, 1000)
        }

        self.startNanoFactoryPostSetup = function () {
            OctoPrint.simpleApiCommand("octoprint_NanoFactory", "startNanoFactoryPostSetup").done(function (response) { }).catch(error => { console.log(error) });
        }


        self.goToNanoFactoryURL = function () {
            window.open(self.nanoFactoryURL(), "_blank")
        }

        self.sharePrinter = function () {
            let shareData = {
                title: 'Share NanoFactory Printer',
                text: 'Share your NanoFactory Printer with your friends',
                url: self.nanoFactoryURL()
            }


            // check for availability of navigator.share
            if (navigator.share)

                navigator.share(shareData).catch((err) => console.error(err))
            else
                self.copyToClipboard(self.nanoFactoryURL())
        }


        self.updateShowBrowserGUI = function () {
            OctoPrint.simpleApiCommand("octoprint_NanoFactory", "setShowBrowserGUI", { "showBrowserGUI": self.showBrowserGUI() }).done(function (response) { }).catch(error => { console.log(error) })
        }

        self.restartNanoFactoryApp = function () {
            OctoPrint.simpleApiCommand("octoprint_NanoFactory", "restartNanoFactoryApp", { "mode": self.restartMode() }).done(function (response) {
                new PNotify({
                    title: "Restart successful",
                    text: "Restarted NanoFactory Successfully",
                    type: "success"
                });
            }).catch(error => {
                console.log(error)
                new PNotify({
                    title: "Restart Failed",
                    text: "Failed to restart NanoFactory. Reason: " + err.message,
                    type: "error"
                });
            });
        }

        self.deleteNanoFactoryDatabase = function () {
            self.toggleClearNanoFactoryDatabaseModal()

            OctoPrint.simpleApiCommand("octoprint_NanoFactory", "deleteNanoFactoryDatabase").done(function (response) {
                new PNotify({
                    title: "Delete successful",
                    text: "NanoFactory Database delete successfully",
                    type: "success"
                });
            }).catch(error => {
                console.log(error)
                new PNotify({
                    title: "Failed to delete the database",
                    text: "Reason: " + err.message,
                    type: "error"
                });
            });
        }

        self.togglerRestartSeverModal = function () {
            self.showRestartServerModal(!self.showRestartServerModal())
        }

        self.toggleClearNanoFactoryDatabaseModal = function () {
            self.showClearNanoFactoryDatabaseModal(!self.showClearNanoFactoryDatabaseModal())
        }

        self.giveupSnapshotCameraStream = function () {
            OctoPrint.simpleApiCommand("octoprint_NanoFactory", "giveupSnapshotCameraStream").done(function (response) {
                new PNotify({
                    title: "Snapshot stream reloaded successfully",
                    type: "success"
                });
            }).catch(error => {
                console.log(error)
                new PNotify({
                    title: "Failed to release the stream",
                    text: "Reason: " + err.message,
                    type: "error"
                });
            });
        }

        self.checkForExistingAPIKey = async function (baseUrl) {

            let response = await fetch(baseUrl + "/api/plugin/appkeys")
            if (response.ok) {
                let data = await response.json()
                for (let object of data.keys) {
                    if (object.app_id == "octoprint_NanoFactory") {
                        return object.api_key
                    }
                }
            }

            return false
        }


        self.startAuthFlow = async function () {
            console.log("startAuthFlow called")
            let baseUrl = document.URL
            baseUrl = baseUrl.split("/")[2]
            baseUrl = "http://" + baseUrl

            let apiKey = await self.checkForExistingAPIKey(baseUrl)

            if (apiKey) {
                self.APIKEY(apiKey)
                OctoPrint.simpleApiCommand("octoprint_NanoFactory", "saveAPIKEY", { api_key: apiKey }).done(function (response) { }).catch(error => { console.log(error) });
                return
            }

            let response = await fetch(baseUrl + "/plugin/appkeys/request", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "app": "octoprint_NanoFactory",
                })
            })
            if (response.ok) {
                self.pollForVerification(response.headers.get("Location"))

            }

        }


        self.pollForVerification = function (pollURL) {
            if (pollURL) {
                let pollingInterval = setInterval(async () => {

                    let response = await fetch(pollURL, {
                        method: "GET",
                    })

                    if (response.status === 200) {
                        clearInterval(pollingInterval)


                        let responseBody = await response.json()

                        self.APIKEY(responseBody["api_key"])

                        OctoPrint.simpleApiCommand("octoprint_NanoFactory", "saveAPIKEY", { api_key: responseBody["api_key"] }).done(function (response) { }).catch(error => { console.log(error) });

                        document.getElementById("master-peer-id").disabled = true


                        new PNotify({
                            title: "APIKey generation success",
                            text: "APIKey successfully generated for NanoFactory",
                            type: "success"
                        });

                    } else if (response.status === 404) {
                        clearInterval(pollingInterval)

                        new PNotify({
                            title: "APIKey generation failed",
                            text: "Failed to generate APIKey for NanoFactory. Please generate an APIKey and add it to NanoFactory settings",
                            type: "error"
                        });
                    }

                }, 1000)
            }
        }

        self.handleAPIKeySubmit = function () {
            OctoPrint.simpleApiCommand("octoprint_NanoFactory", "saveAPIKEY", { api_key: self.APIKEY() }).done(function (response) {
                new PNotify({
                    title: "Save Successful",
                    text: 'API Key saved successfully',
                    type: "success"
                });
            }).catch(error => { console.log(error) });

            self.handleShowAPIKeyEditButton()
        }


        self.handleAPIKeyEdit = function () {
            self.handleShowAPIKeySubmitButton()
            let inputField = document.getElementById("api-key")
            inputField.disabled = false
            inputField.focus()
        }

        self.handleMasterPeerIDSubmit = function () {
            OctoPrint.simpleApiCommand("octoprint_NanoFactory", "saveMasterPeerID", { "masterPeerID": self.masterPeerID() }).done(function (response) {
                self.nanoFactoryActionButtonText("Go to NanoFactory")
                new PNotify({
                    title: "Save Successful",
                    text: 'Master Device ID saved successfully',
                    type: "success"
                });
            }).catch(error => { console.log(error) });
            self.handleShowMasterPeerIDEditButton()

        }


        self.handleMasterPeerIDClear = function () {
            let inputField = document.getElementById("master-peer-id")
            inputField.disabled = false
            self.masterPeerID("")
            inputField.value = ""
            inputField.focus()
            self.handleShowMasterPeerIDSubmitButton()
        }


        self.handleShowMasterPeerIDEditButton = function () {
            self.showMasterPeerIDEditButton(true)
            self.showMasterPeerIDSubmitButton(false)
        }

        self.handleShowMasterPeerIDSubmitButton = function () {
            self.showMasterPeerIDEditButton(false)
            self.showMasterPeerIDSubmitButton(true)
        }

        self.handleShowAPIKeyEditButton = function () {
            self.showAPIKeyEditButton(true)
            self.showAPIKeySubmitButton(false)
        }

        self.handleShowAPIKeySubmitButton = function () {
            self.showAPIKeyEditButton(false)
            self.showAPIKeySubmitButton(true)
        }


        self.copyToClipboard = function (text) {

            if (text === "updateLinuxAndInstallChromiumCommand")
                text = self.updateLinuxAndInstallChromiumCommand()

            if (navigator.clipboard)
                navigator.clipboard.writeText(text).catch(err => {
                    self.fallbackCopyToClipboard(text)
                }).then(() => {
                    new PNotify({
                        title: "Copied to clipboard",
                        text: text + ' copied successfully',
                        type: "success"
                    });
                })
            else
                self.fallbackCopyToClipboard(text)

        }

        self.fallbackCopyToClipboard = function (text) {
            try {
                let dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = text;
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
            } catch (error) {
                new PNotify({
                    title: "Failed to copy to clipboard",
                    text: "Reason: " + error.message,
                    type: "error"
                });
            }
        }

        self.handleTabBarClick = function (tab) {
            if (tab === "manual") {
                self.showManualInstructionsLinux(true)
                self.showAutomatedInstructionsLinux(false)
            } else {
                self.showManualInstructionsLinux(false)
                self.showAutomatedInstructionsLinux(true)
            }
        }

        // -------------- SSH related functions --------------
        let iframe = $('#hidden-iframe'),
            status = $('#status');

        self.initiateSSHConnection = function () {
            $('#terminal-container').css('display', 'block');

            setTimeout(() => {
                const SSH_PROXY_PORT = 8888
                const SSH_PORT = 22
                const HOST = $('#hostname').val()
                const USER = $('#username').val()
                const PASS = $('#password').val()
                iframe.attr('src', `http://${HOST}:${SSH_PROXY_PORT}`);

                // check that the iframe has loaded before sending the commands
                iframe.on('load', function () {
                    postMessageToIframe(JSON.stringify({
                        action: 'connect',
                        hostname: HOST,
                        port: SSH_PORT,
                        username: USER,
                        password: PASS
                    }));
                })
            }, 200);
        }

        postMessageToIframe = function (message) {
            iframe[0].contentWindow.postMessage(message, '*');
        }


        window.addEventListener('message', function (event) {
            let data = JSON.parse(event.data);
            console.log("parent received: ", data)
            switch (data.action) {
                case 'status':
                    if (data.status === 'connected') {
                        $('#conPan').css('display', 'none');
                        $('#chromium-installation-loading').css('display', 'flex');
                        postMessageToIframe(JSON.stringify({ action: "installChromium" }))
                    }
                    break;
                case "log_status":
                    status.html(text.split('\n').join('<br/>'));
                    break
                case 'setupComplete':
                    OctoPrint.simpleApiCommand("octoprint_NanoFactory", "startNanoFactoryPostSetup").done(function (response) { }).catch(error => { console.log(error) });
                    break
                case 'setupFailed':
                    $('#chromium-installation-loading').css('display', 'none');
                    $('#chromium-installation-failed').css('display', 'flex');
                    new PNotify({
                        title: "Browser installation failed",
                        text: "Please try again",
                        type: "error"
                    });
                    break
            }
        })
    }


    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: octoprint_NanoFactoryViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ /* "loginStateViewModel", "settingsViewModel" */],
        // Elements to bind to, e.g. #settings_plugin_NanoFactory, #tab_plugin_NanoFactory, ...
        elements: ["#tab_plugin_octoprint_NanoFactory"]
    });
});