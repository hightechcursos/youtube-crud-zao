"use strict";

var fs = require("fs");

var path = require("path");

var home = path.join(__dirname, 'public', 'home.html');
fs.readFile(home, 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});