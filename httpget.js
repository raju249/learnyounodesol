var http = require('http');
http.get(process.argv[2],function(response){
    response.on("err",function(err){
        console.log(err)
    })
    response.on("data",function(data){
        console.log(data.toString());
    })
})