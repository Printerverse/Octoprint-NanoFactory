/*
 * View model for Octoprint-NanoFactory
 *
 * Author: Printerverse
 * License: AGPLv3
 */
$(function () {
    function NanoFactoryViewModel(parameters) {
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

        self.restartMode = ko.observable("stable") // can be "stable" or "dev"

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        self.onDataUpdaterPluginMessage = function (plugin, data) {
            if (plugin == "NanoFactory") {

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
                        self.initializeSSHUtils()
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
                    let text = data["showBrowserGUI"] ? "NanoFactory Browser GUI is Enabled" : "NanoFactory Browser GUI is Disabled"
                    new PNotify({
                        text: text,
                        type: "notice",
                    })
                }
            }
        }


        self.onBeforeBinding = function () {
            OctoPrint.simpleApiCommand("NanoFactory", "getOperatingSystem").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("NanoFactory", "getAPIKey").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("NanoFactory", "getMasterPeerID").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("NanoFactory", "getPeerID").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("NanoFactory", "getCors").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("NanoFactory", "getBrowserInstalled").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("NanoFactory", "getShowBrowserGUI").done(function (response) { }).catch(error => { console.log(error) });
        }

        self.onStartupComplete = function () {
            setTimeout(() => {
                let apiKey = self.APIKEY()
                console.log("current apiKey: ", apiKey)
                if (!(apiKey.length > 0)) {
                    console.log("apiKey not found. Calling startAuthFlow")
                    self.startAuthFlow()
                    self.handleShowAPIKeySubmitButton()
                    // self.apiKeyIconPath = ko.observable(self.submitIconPath)
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
            OctoPrint.simpleApiCommand("NanoFactory", "startNanoFactoryPostSetup").done(function (response) { }).catch(error => { console.log(error) });
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

                navigator.share(shareData).catch((err) => console.log(err))
            else
                self.copyToClipboard(self.nanoFactoryURL())
        }


        self.updateShowBrowserGUI = function () {
            OctoPrint.simpleApiCommand("NanoFactory", "setShowBrowserGUI", { "showBrowserGUI": self.showBrowserGUI() }).done(function (response) { }).catch(error => { console.log(error) })
        }

        self.restartNanoFactoryApp = function () {
            OctoPrint.simpleApiCommand("NanoFactory", "restartNanoFactoryApp", { "mode": self.restartMode() }).done(function (response) {
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

            OctoPrint.simpleApiCommand("NanoFactory", "deleteNanoFactoryDatabase").done(function (response) {
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

        self.toggleClearNanoFactoryDatabaseModal = function () {
            self.showClearNanoFactoryDatabaseModal(!self.showClearNanoFactoryDatabaseModal())
        }

        self.giveupSnapshotCameraStream = function () {
            OctoPrint.simpleApiCommand("NanoFactory", "giveupSnapshotCameraStream").done(function (response) {
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
                    if (object.app_id == "NanoFactory") {
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
                OctoPrint.simpleApiCommand("NanoFactory", "saveAPIKEY", { api_key: apiKey }).done(function (response) { }).catch(error => { console.log(error) });
                return
            }

            let response = await fetch(baseUrl + "/plugin/appkeys/request", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "app": "NanoFactory",
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

                        OctoPrint.simpleApiCommand("NanoFactory", "saveAPIKEY", { api_key: responseBody["api_key"] }).done(function (response) { }).catch(error => { console.log(error) });

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
            OctoPrint.simpleApiCommand("NanoFactory", "saveAPIKEY", { api_key: self.APIKEY() }).done(function (response) {
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
            OctoPrint.simpleApiCommand("NanoFactory", "saveMasterPeerID", { "masterPeerID": self.masterPeerID() }).done(function (response) {
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
        self.initiateSSHConnection = function () {
            $('#terminal-container').css('display', 'block');
            const SSH_PORT = 22
            const PASS_KEY = ""
            const BYPASS_PROXY = false
            const BYPASS_FINGERPRINT = false
            const HOST = $('#hostInp').val()
            const USER = $('#usrInp').val()
            const PASS = $('#passInp').val()
        }

        self.initializeSSHUtils = async function () {
            $('#conBtn').prop('disabled', true);
            $('#hostInp').keyup(function () { $('#conBtn').prop('disabled', notReady() ? true : false); })
            $('#portInp').keyup(function () { $('#conBtn').prop('disabled', notReady() ? true : false); })
            $('#usrInp').keyup(function () { $('#conBtn').prop('disabled', notReady() ? true : false); })
            $('#passInp').keyup(function () { $('#conBtn').prop('disabled', notReady() ? true : false); })
            $('#msg').hide()
            $('#errMsg').hide()

            initXTerm();
        }

        let term;

        function initXTerm() {
            term = new Terminal({
                rows: 24,
                cols: 50,
                cursorBlink: true
            });
            const fitAddon = new FitAddon.FitAddon();
            term.loadAddon(fitAddon);
            term.open(document.getElementById('terminal'));
            fitAddon.fit();
            term.write('\n\r');
            fitAddon.fit();

            // Assigning term to window so that wasm can find it
            window.term = term;
        }

        // an "echo 'NanoFactory Ready'" is sent along with the commands to install Chromium Browser
        // Hence we wanna ignore the first "NanoFactory Ready" as it is just the command being sent to the terminal
        // It showing up again is when chromium has finished installing
        let firstNanoFactoryReadyDone = false
        let firstBrowserFailedDone = false
        terminalOutput = function (data) {
            const NANOFACTORY_READY_LOG = "NanoFactory Ready"
            const INSTALLATION_FAILED_LOG = "Browser installation failed"
            if (data.includes(NANOFACTORY_READY_LOG)) {
                if (firstNanoFactoryReadyDone) {
                    OctoPrint.simpleApiCommand("NanoFactory", "startNanoFactoryPostSetup").done(function (response) { }).catch(error => { console.log(error) });
                }
                else {
                    $('#chromium-installation-loading').css('display', 'flex');
                    firstNanoFactoryReadyDone = true
                }
            } else if (data.includes(INSTALLATION_FAILED_LOG)) {
                if (firstBrowserFailedDone) {
                    $('#chromium-installation-loading').css('display', 'none');
                    $('#chromium-installation-failed').css('display', 'flex');
                    new PNotify({
                        title: "Browser installation failed",
                        text: "Please try again",
                        type: "error"
                    });
                }
                else {
                    firstBrowserFailedDone = true
                }
            }
        }

        notReady = function () {
            return $("portInp").val() == "" || $('#hostInp').val() == "" || $('#usrInp').val() == "" ||
                ($('#passInp').val() == "" && $('#pkInp').val() == "")
        }

        showServerKey = function (key) {
            $('#fingerprintMsg').html("RSA key fingerprint is " + key + " <br>Are you sure you want to continue connecting (yes/no)?")
            $('#fingerprintModal').modal('show')
        }

        connected = function (status) {
            showMsg('');
            showErr('');
            $('#msg').hide();
            $('#errMsg').hide()
            $('#conPan').hide();
            $('#conInf').html(status);

            term.focus();

            setTimeout(() => {
                installChromium()
            }, 1500);
        }

        showReconnect = function (errorMsg) {
            $('#connLostMsg').html("The connection to your server was interrupted: " + errorMsg + "<br>Do you want to reconnect?")
            $('#reconnectModal').modal('show')
        }

        reconnect = function (shouldReconnect) {
            if (shouldReconnect) {
                initConnection(term.rows, term.cols, $('#hostInp').val(), Number($('#portInp').val()), $('#usrInp').val(), $('#passInp').val(), $('#pkInp').val(), $('#bypassProxyInp').is(':checked'), false);
            } else {
                $('#conPan').show();
            }
        }

        showMsg = function (msg) {
            $('#errMsg').hide()
            $('#msg').show()
            $('#msg').html(msg);
        }

        showErr = function (msg) {
            $('#msg').hide();
            $('#conPan').show();
            $('#conBtn').prop('disabled', false);
            $('#errMsg').show();
            $('#errMsg').html(msg);
        }
    }


    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: NanoFactoryViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ /* "loginStateViewModel", "settingsViewModel" */],
        // Elements to bind to, e.g. #settings_plugin_NanoFactory, #tab_plugin_NanoFactory, ...
        elements: ["#tab_plugin_NanoFactory"]
    });
});
