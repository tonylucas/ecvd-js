/*
in-class exercice:
Create a very simple webserver, which can distribute any found file and handle the case when no file exists
You can start with the help of the about page of the nodejs website: https://nodejs.org/en/about/
*/

var http = require('http'); // We require the http module, needed to handle http request
var fs = require('fs'); // We require the file system to access files

// We create the server
var proxy = http.createServer(function (req, res) {


  var arrayString = req.url.split("?");
  var agmtsString = arrayString[1];
  var agmts = argString.split("&");
  var paramObjet = {};

  for (var i=0; i< agmts.length; i++) {
    var argument = agmts[i].split ("=");
    paramObjet [argument[0]] = argument [1];
  }

  console.log(paramObjet);

  if (/favicon.ico/i.test(req.url)) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end();
  }
  else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();
  }

  console.log(req.url);

});


proxy.listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
