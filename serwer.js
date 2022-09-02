var http = require("http");
var dane = require("data.js");
var server = http.createServer();
server.on("request", function(req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    // res.write(dane);
    res.write(dane)
    res.end();
})

server.listen(8088);