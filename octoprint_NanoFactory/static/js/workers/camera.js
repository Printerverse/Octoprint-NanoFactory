let cameraStream;

onmessage = (e) => {

    if (cameraStream)
        clearInterval(cameraStream)

    getCameraStream(e.data[0], e.data[1])
}


function getCameraStream(snapshotUrl, FPS) {
    let numberOfTries = 0
    let streamOpened = false
    const ERROR_NAMES = ["AbortError", "TypeError"]
    const MAX_TRIES = 20
    const MAX_ERRORS_BEFORE_OPENING_STREAM = 5

    cameraStream = setInterval(() => {

        if (numberOfTries > MAX_TRIES) {
            clearInterval(cameraStream)
            postMessage("restartWorker")
            return
        }

        fetch(snapshotUrl).then((response) => {
            if (response.ok) {
                numberOfTries = 0
                response.arrayBuffer().then((buffer) => {
                    postMessage(buffer)
                })
            } else {
                numberOfTries += 1
            }
        }).catch((error) => {
            console.error(error)
            numberOfTries += 1
            if (ERROR_NAMES.includes(error.name) && numberOfTries > MAX_ERRORS_BEFORE_OPENING_STREAM && !streamOpened) {
                postMessage("openStream")
                streamOpened = true
            }
        })
    }, 1000 / FPS)
}