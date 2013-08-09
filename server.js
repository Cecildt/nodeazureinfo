var http = require('http');

var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    var title = process.title,
        version = process.version;

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(title + " - " + version);
}).listen(port);
console.log("Server listening on port %d", port);