var http = require('http'); // We require the http module, needed to handle http request
var fs = require('fs'); // We require the file system to access files

function extractDomain(url) {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    return domain;
}

function request(url, path, callback) {
  console.log('url : '+ url);

  var options = {
    host: url,
    port: 80,
    path: path,
    method: 'GET'
  };

  http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    var header = res.headers;
    //console.log('HEADER: ', header);

    if(res.statusCode === 200) {

      res.setEncoding('utf8');

      var the_body = '';
      var i = 0;

      res.on('data', function (chunk) {
        the_body += chunk;
        i++;
        // console.log(i);
        // console.log(the_body);
      });

      res.on('end', function() {

        var response = {
          body:the_body,
          content_type:header['content-type'],
          code: res.statusCode
        }

        callback(null, response);
      });

    } else if(res.statusCode === 301 || res.statusCode === 302) {
      console.log('location : '+header.location);

      var location = header.location.split("?");

      //console.log('location', location);

      // var the_url = extractDomain('http://'+location);
      // console.log('the_url', the_url);

      // var the_path;

      // if(typeof location.split('/')[3] !== 'undefined') {
      //   the_path = location;
      // }

      the_url = location[0];
      the_path = location[1];

      console.log('the_url', the_url);
      console.log('the_path', the_path);
      if(typeof the_path === 'undefined') {
        the_path = '';
      }

      request(the_url, the_path, callback);
    }

  }).end();
}

http.createServer(function (req, res) {

  var data = req.url.split("?");
  if(typeof data[1] !== 'undefined') {

    var koko = data[1].split('=')[1];

    request(koko, '', function(error, response) {

     //console.log(response);

      //process.exit();

      res.writeHead(response.code, {'Content-Type': 'text/html'});

      //res.end(response.body);

      res.write(response.body , function(err) {
        console.log('err', err);
        res.end();
      });
      
    });
  }
  
}).listen(1337);

console.log('Server running at http://localhost:1337/');

