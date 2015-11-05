var http = require('http');

http.createServer(function (request, response) {
    var data = request.url.split("?");
    var argsString = data[1];
    var args = argsString.split("&");
    var paramObjet = {};
    for (var i = 0; i < args.length; i++) {
        var argument = args[i].split('=');
        paramObjet[argument[0]] = argument[1];
    }


    if (/favicon/.test(request.url)) {
        res.writeHead(404);
        res.end();
        return;
    }


    var options = {
        host: paramObjet.website
    };

    http.get(options, function (res) {

        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
            response.end(chunk);
        });


    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });



}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');