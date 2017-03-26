/**
 * Created by Monica on 2017-03-26.
 */

var http = require('http');
var ip = require('ip');
var fs = require('fs');

var port = 8081;

// store the contents of 'index.html' to a buffer
var get = fs.readFileSync('./get.html');
var post = fs.readFileSync('./post.html');

var serverHandler = function(req, res) {
    if (req.method === 'POST'){
        // for POST requests, serve up the contents that were posted
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(post);
    } else {
        // for GET requests, serve up the contents in 'index.html'
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(get);
    }
};

http.createServer(serverHandler).listen(port);

console.log("Server running on " + ip.address() + ":" + port);