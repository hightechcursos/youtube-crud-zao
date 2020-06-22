"use strict";

var http = require('http');

var fs = require("fs");

var path = require("path");

var hostname = '127.0.0.1';
var port = 3000;
var server = http.createServer(function (req, res) {
  if (req.url === "/api/bananas") {
    res.end(JSON.stringify({
      titulo: 'Bananas',
      img: 'https://media.giphy.com/media/1uPiL9Amv5zkk/giphy.gif'
    }));
  } else if (req.url === "/") {
    //Carregar o HTML?
    var home = path.join(__dirname, 'public', 'home.html');
    fs.readFile(home, 'utf8', function (err, data) {
      if (err) throw err; //console.log(data);

      res.end(data);
    });
  } else {
    var file = path.join(__dirname, 'public', req.url);
    fs.readFile(file, 'utf8', function (err, data) {
      if (err) console.dir(err); //console.log(data);

      res.end(data);
    });
  }
});
server.listen(port, hostname, function () {
  console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});