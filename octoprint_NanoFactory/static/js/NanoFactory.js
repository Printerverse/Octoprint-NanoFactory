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
        self.peerID = ko.observable("")
        self.peerIDMessage = ko.observable("")
        self.masterPeerID = ko.observable("")
        self.nanoFactoryURL = ko.observable("")
        self.nanoFactoryActionButtonText = ko.observable("Add to NanoFactory")
        self.browserStatus = ko.observable("Not Alive")
        self.browserStatusColor = ko.observable("red")

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        self.onDataUpdaterPluginMessage = function (plugin, data) {
            if (plugin == "NanoFactory") {

                if (data["api_key"]) {
                    self.APIKEY(data["api_key"])


                    if (data["api_key"].length > 0) {
                        document.getElementById("api-key").disabled = true
                    } else {
                        document.getElementById("api-key").disabled = false
                    }
                }

                if (data["masterPeerID"]) {
                    self.masterPeerID(data["masterPeerID"])

                    if (data["masterPeerID"].length > 0) {
                        document.getElementById("master-peer-id").disabled = true
                        self.nanoFactoryActionButtonText("Go to NanoFactory")
                    } else {
                        document.getElementById("master-peer-id").disabled = false
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

                if (data["start_auth_flow"]) {
                    new PNotify({
                        title: "API Key Invalid",
                        text: "API key for NanoFactory is invalid. Initiating API Key generation flow!",
                        type: "error"
                    });

                    self.startAuthFlow()
                }

                if (data["browser_status"]) {
                    console.log(data["browser_status"])
                    if (Boolean(data["browser_status"]))
                        self.browserStatus(new Date().toString())
                }

                if (data["cors_error"]) {
                    new PNotify({
                        title: "CORS Access Needed",
                        text: data["cors_error"],
                        type: "notice",
                        hide: false
                    });
                }
            }
        }


        self.onBeforeBinding = function () {
            OctoPrint.simpleApiCommand("NanoFactory", "getAPIKey").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("NanoFactory", "getMasterPeerID").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("NanoFactory", "getPeerID").done(function (response) { }).catch(error => { console.log(error) });
            OctoPrint.simpleApiCommand("NanoFactory", "getCors").done(function (response) { }).catch(error => { console.log(error) });
        }

        self.onAfterBinding = function () {
            setInterval(() => {
                OctoPrint.simpleApiCommand("NanoFactory", "checkBrowser").done(function (response) { }).catch(error => { console.log(error) });
            }, 5000)
        }


        self.onStartupComplete = function () {
            setTimeout(() => {
                let apiKey = self.APIKEY()
                console.log("current apiKey: ", apiKey)
                if (!(apiKey.length > 0)) {
                    console.log("apiKey not found. Calling startAuthFlow")
                    self.startAuthFlow()
                }

            }, 1000)
        }



        self.goToNanoFactoryURL = function () {
            window.open(self.nanoFactoryURL(), "_blank")
        }

        self.copyNanoFactoryURL = function () {
            self.copyToClipboard(self.nanoFactoryURL())
        }

        self.copyToClipboard = function (text) {
            if (!navigator.clipboard) {
                self.fallbackCopyTextToClipboard(text);
                return; a
            }
            navigator.clipboard.writeText(text).then(function () {

                new PNotify({
                    title: "Copied successfully",
                    text: text + ' copied successfully',
                    type: "success"
                });
            }, function (err) {
                console.error('Async: Could not copy text: ', err);
                new PNotify({
                    title: "Failed to copy",
                    text: "Failed to Copy " + text + ". Reason: " + err.message,
                    type: "error"
                });
            });
        }

        self.fallbackCopyTextToClipboard = function (text) {
            var textArea = document.createElement("textarea");
            textArea.value = text;

            // Avoid scrolling to bottom
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";

            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Fallback: Copying text command was ' + msg + ' for ' + text);

                if (msg === "successful") {
                    new PNotify({
                        title: "Copied successfully",
                        text: text + ' copied successfully',
                        type: "success"
                    });
                } else {
                    new PNotify({
                        title: "Failed to copy",
                        text: "Failed to Copy " + text,
                        type: "error"
                    });
                }
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
                new PNotify({
                    title: "Failed to copy",
                    text: "Failed to Copy " + text + ". Reason: " + err.message,
                    type: "error"
                });
            }

            document.body.removeChild(textArea);
        }


        self.restartNanoFactoryApp = function () {
            OctoPrint.simpleApiCommand("NanoFactory", "restartNanoFactoryApp").done(function (response) {
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

        self.giveupSnapshotCameraStream = function () {
            OctoPrint.simpleApiCommand("NanoFactory", "giveupSnapshotCameraStream").done(function (response) {
                new PNotify({
                    title: "Snapshot stream released successfully",
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


        self.startAuthFlow = async function () {
            console.log("startAuthFlow called")
            let baseUrl = document.URL
            baseUrl = baseUrl.split("/")[2]
            baseUrl = "http://" + baseUrl
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
        }


        self.handleAPIKeyEdit = function () {
            let inputField = document.getElementById("api-key")
            inputField.disabled = false
            inputField.focus()
        }

        self.handleMasterPeerIDSubmit = function () {
            OctoPrint.simpleApiCommand("NanoFactory", "saveMasterPeerID", { "masterPeerID": self.masterPeerID() }).done(function (response) {
                nanoFactoryActionButtonText("Go to NanoFactory")
                new PNotify({
                    title: "Save Successful",
                    text: 'Master Device ID saved successfully',
                    type: "success"
                });
            }).catch(error => { console.log(error) });
        }


        self.handleMasterPeerIDClear = function () {
            let inputField = document.getElementById("master-peer-id")
            inputField.disabled = false
            self.masterPeerID("")
            inputField.value = ""
            inputField.focus()
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
