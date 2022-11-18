
const peerID = arguments[0]
peer = new Peer(peerID);

peer.on("open", function (id) {
    console.log("Connected to peer server with id:" + id);
});

peer.on("connection", function (connection) {
    console.log("Connected with peer:" + connection.peer)
    connection.on("data", function (data) {
        console.log("Received Label: " + connection.label)
        handleIncomingData(data, connection.peer, connection.label, connection.metadata)

        connection.close()
    })
})

//Handle disconnections
peer.on("disconnected", function () {
    console.log("Disconnected from signaling server, reconnecting...");
    peer.reconnect();
});

peer.on("close", function () {
    console.log("Peer destroyed, cannot reconnect");
});

//Handle errors
peer.on("error", function (err) {
    console.error(err);
});

