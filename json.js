var http = require("http");
var url = require("url")

var port = process.argv[2];

var server = http.createServer(function(req,resp){
    var path = url.parse(req.url,true);
    if (path.pathname == "/api/parsetime")
    {
        var query = path.query["iso"];
        var date = new Date(query);
        var hrs = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var result = {"hour":hrs,"minute":min,"second":sec};
        resp.writeHead(200,'Content-Type'+':'+'application/json');
        resp.end(JSON.stringify(result))
        
    }
    else if(path.pathname == "/api/unixtime")
    {
        var query = path.query["iso"]
       var result = new Date(query).getTime();
       result = {"unixtime":result};
       resp.end(JSON.stringify(result))
        
    }
});

server.listen(port);