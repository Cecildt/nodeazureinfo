var http = require('http');

var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    var response =
            "Title: " + process.title + "\n" +
            "Version: " + process.version + "\n" +
            "Arch: " + process.arch + "\n" +
            "Platform: " + process.platform + "\n" +
            "Process ID: " + process.pid + "\n";


    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(response);
}).listen(port);
console.log("Server listening on port %d", port);