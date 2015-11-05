
var http = require('http');
var net = require('net');
var url = require('url');

// We create the server
http.createServer(function (req, res) { // This callback is called every time a request come to the webserver
    if(/favicon/i.test(req.url)){
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end();
      return;
    }
    var url = req.url.split('?');
    var args = url[1];
    var ar = args.split("&");
    var paramObjet = {};

    for(var i = 0; i < ar.length; i++){
      var argument = ar[i].split('=');
      paramObjet[argument[0]] = argument[1];
    }

    var options = {
 
    host: paramObjet.site

  };

    http.get(options, function(resp) {
      resp.on('data', function(chunk){
        res.end(chunk);
      });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });


}).listen(1337, "127.0.0.1");


console.log('Server running at http://127.0.0.1:1337/');

