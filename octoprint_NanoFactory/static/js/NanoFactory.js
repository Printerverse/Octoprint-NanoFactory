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

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        self.onDataUpdaterPluginMessage = function (plugin, data) {
            if (plugin == "NanoFactory") {

                if (data["api_key"]) {
                    self.APIKEY(data["api_key"])
                }

                if (data["peerID"]) {


                    self.peerID(data["peerID"])
                    self.peerIDMessage("Your Peer ID: " + data["peerID"])

                    //Copying it to the clipboard

                    text = data["peerID"]
                    if (!navigator.clipboard) {
                        self.fallbackCopyTextToClipboard(text);
                        return;
                    }
                    navigator.clipboard.writeText(text).then(function () {

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


        self.onBeforeBinding = function () {
            OctoPrint.simpleApiCommand("NanoFactory", "sendAPIKey").done(function (response) { }).catch(error => { console.log(error) });
        }

        self.onStartupComplete = function () {
            console.log("onStartupComplete Called. calling setTimeout")
            setTimeout(() => {
                console.log("Timeout complete")
                let apiKey = self.APIKEY()
                console.log("current apiKey: ", apiKey)
                if (!(apiKey.length > 0)) {
                    console.log("apiKey not found. Calling startAuthFlow")
                    self.startAuthFlow()
                }

            }, 1000)
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
            console.log("Button clicked!!!")
            OctoPrint.simpleApiCommand("NanoFactory", "getPeerID").done(function (response) { }).catch(error => { console.log(error) });
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
            console.log("api key requested. response:")
            console.log((await response.json()))
            if (response.ok) {
                console.log("response oka. polling for verification")
                self.pollForVerification(response.headers.get("Location"))

            }

        }


        self.pollForVerification = function (pollURL) {
            if (pollURL) {
                console.log("starting polling")
                let pollingInterval = setInterval(async () => {

                    let response = await fetch(pollURL, {
                        method: "GET",
                    })

                    console.log("polling result")
                    console.log((await response.json()))

                    if (response.status === 200) {
                        clearInterval(pollingInterval)


                        let responseBody = await response.json()

                        self.APIKEY(responseBody["api_key"])

                        OctoPrint.simpleApiCommand("NanoFactory", "saveAPIKEY", { api_key: responseBody["api_key"] }).done(function (response) { }).catch(error => { console.log(error) });

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
