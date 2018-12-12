// Setup an example server
var server = require('socket.io').listen(8080);

// On established connection
server.sockets.on('connection', function (socket) {

    // Get server host
    var host = socket.handshake.headers.host;

    // Remove port number together with colon
    host = host.replace(/:.*$/,"");

    // To test it, output to console
    console.log(host);
});