var http = require("http");

http.get(process.argv[2],function(response){
    var data = "";
    response.on("data",function(d){
        data+=d.toString();
    })
    response.on("end",function(){
        console.log(data.length);
        console.log(data.toString());
    })
    
})