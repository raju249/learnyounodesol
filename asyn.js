var fs = require("fs");

fs.readFile(process.argv[2],function(err,data){
    if (err)
        console.log(err);
    else
    {
       var  d = data.toString().split('\n').length;
       console.log(d - 1);
    }
})