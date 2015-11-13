var fs = require('fs')

fs.readdir(process.argv[2],function(err,list){
    if (err)
    
        console.log(err)
    else
    {
        for(var i = 0; i < list.length; i++)
        {
            var file = list[i];
            var f = file.split('.');
            if (f[1] == process.argv[3])
            {
               console.log(file)
            }
        }
        
    }
})
