var http = require('http');
var bl = require('bl')
http.get(process.argv[2],function(response){
    response.pipe(bl(function(err,data){
        if (err)
            console.log(err)
        else
        {
            var num = data.length;
            console.log(num);
            console.log(data.toString());
        }
    }))
})