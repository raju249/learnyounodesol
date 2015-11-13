var mymodule = require("./mod");

var dirname = process.argv[2];
var ex = process.argv[3];

mymodule(dirname,ex,function(err,list){
    if (err)
    {
        console.log(err)
    }
    else
    {
        for(var i = 0; i < list.length; i++)
        {
            console.log(list[i].toString());
        }
    }
})