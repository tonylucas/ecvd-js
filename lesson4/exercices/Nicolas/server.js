var http = require('http'); // We require the http module, needed to handle http request
var fs = require('fs'); // We require the file system to access files

// We create the server
http.createServer(function (req, res){

  var arrayString = req.url.split("?");//.shift().substr(1);
  var agmtsString = arrayString[1];
  console.log(agmtsString);
  var agmts = agmtsString.split('&');
  var paramObjet = {};

  for (var i = 0; i < agmts.length; i++) {
    var argument = agmts[i].split('=');
    paramObjet[argument[0]] = argument[1];
  }
  console.log(paramObjet);

  var regex = /favicon/;

  if(regex.test(req.url)){
    res.writeHead(404,{'Content-Type': 'text/plain'});
    res.end();
  } else{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();
  }
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');