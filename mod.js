var fs = require("fs");

module.exports = function(dirname,extension,callback){
    
    var filelist = [];
    var i = 0;
    fs.readdir(dirname,function(err,list){
        if (err)
            return callback(err);
        else
        {
            for(var j = 0; j < list.length; j++)
            {
                var file = list[j];
                var f = file.split(".");
                if (f[1] == extension)
                {
                    filelist[i] = file;
                    i++;
                }
            }
            return callback(null,filelist);
        }
    })
}