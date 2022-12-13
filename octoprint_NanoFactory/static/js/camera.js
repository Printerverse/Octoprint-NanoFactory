
onmessage = (e) => {

    getCameraStream(e.data[0], e.data[1])
}

function getCameraStream(snapshotUrl, FPS) {
    setInterval(() => {
        fetch(snapshotUrl).then((response) => {
            response.arrayBuffer().then((buffer) => {
                postMessage(buffer)
            })
        })
    }, 1000 / FPS)
}