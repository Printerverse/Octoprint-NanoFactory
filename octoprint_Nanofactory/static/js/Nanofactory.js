/*
 * View model for Octoprint-Nanofactory
 *
 * Author: Printerverse
 * License: AGPLv3
 */
$(function () {
    function NanofactoryViewModel(parameters) {
        var self = this;

        self.APIKEY = ko.observable("")
        self.peerID = ko.observable("")
        self.peerIDMessage = ko.observable("")

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        self.onDataUpdaterPluginMessage = function (plugin, data) {
            if (plugin == "Nanofactory") {

                if (data["startAuthFlow"]) {
                    self.startAuthFlow()
                }

                if (data["peerID"]) {


                    self.peerID(data["peerID"])
                    self.peerIDMessage("Your Peer ID: " + data["peerID"])

                    //Copying it to the clipboard

                    text = data["peerID"]
                    if (!navigator.clipboard) {
                        console.log("No navigator.clipboard")
                        self.fallbackCopyTextToClipboard(text);
                        return;
                    }
                    navigator.clipboard.writeText(text).then(function () {
                        console.log('Async: Copying to clipboard was successful for ' + text);

                        new PNotify({
                            title: "Copied successfully",
                            text: data["peerID"] + ' copied successfully',
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
            }
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

        self.getPeerID = function () {
            OctoPrint.simpleApiCommand("Nanofactory", "getPeerID").done(function (response) { }).catch(error => { console.log(error) });
        }


        self.startAuthFlow = async function () {
            let response = await fetch("http://localhost:5000/plugin/appkeys/request", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "app": "Nanofactory",
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

                        OctoPrint.simpleApiCommand("Nanofactory", "saveAPIKEY", { api_key: responseBody["api_key"] }).done(function (response) { }).catch(error => { console.log(error) });

                        new PNotify({
                            title: "APIKey generation success",
                            text: "APIKey successfully generated for Nanofactory",
                            type: "success"
                        });

                    } else if (response.status === 404) {
                        clearInterval(pollingInterval)

                        new PNotify({
                            title: "APIKey generation failed",
                            text: "Failed to generate APIKey for Nanofactory. Please generate an APIKey and add it to Nanofactory settings",
                            type: "error"
                        });
                    }

                }, 1000)
            }
        }
    }


    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: NanofactoryViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ /* "loginStateViewModel", "settingsViewModel" */],
        // Elements to bind to, e.g. #settings_plugin_Octoprint-Nanofactory-V2, #tab_plugin_Octoprint-Nanofactory-V2, ...
        elements: ["#tab_plugin_Nanofactory"]
    });
});
