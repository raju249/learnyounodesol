var http = require("http");
var fs = require("fs")
var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(req,resp){
    var src = fs.createReadStream(file);
    src.pipe(resp);
});

server.listen(port);