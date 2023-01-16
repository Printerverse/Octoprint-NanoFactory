
onmessage = (e) => {

    getCameraStream(e.data[0], e.data[1])
}

function getCameraStream(snapshotUrl, FPS) {
    let numberOfTries = 0
    const MAX_TRIES = 15
    let cameraStream = setInterval(() => {

        if (numberOfTries > MAX_TRIES) {
            clearInterval(cameraStream)
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
            numberOfTries += 1
        })

    }, 1000 / FPS)
}