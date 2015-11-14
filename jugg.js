var http = require("http");
var bl = require("bl");
var urls = [];
var count = 0;
for(var i = 2; i < process.argv.length; i++)
{
    urls.push(process.argv[i]);
    
}
var results = [];

function printResults(){
    for (var i = 0; i < 3; i++)
    {
        console.log(results[i]);
    }
}
function httpget(i){
    http.get(urls[i],function(resp){
    resp.pipe(bl(function(err,data){
        if (err)
            return err;

        results[i] = data.toString();
        count++;
        if (count == 3)
        {
            printResults();
                
        }
        
    }));
});
}
for (var j = 0; j < urls.length; j++)
{
    httpget(j);
}
