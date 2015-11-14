var net = require("net");

var server = net.createServer(function(socket){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var hrs = date.getHours();
    var min = date.getMinutes();
    if (hrs <= 9)
    {
        var hr = "0"+hrs;
    }
    else
    {
        hr = hrs;
    }
    var results = year.toString() + 
                    '-' + (month + 1).toString() + 
                    '-' + day.toString() +" "+
                    hr.toString() + ':' + min.toString();
    socket.write(results);
    socket.write("\n");
    socket.end();
});

server.listen(process.argv[2]);