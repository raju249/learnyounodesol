var th = require("through2-map");
var http = require("http");

var port  = process.argv[2];

var server = http.createServer(function(req,resp){
    req.pipe(th(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(resp);
});

server.listen(port)

