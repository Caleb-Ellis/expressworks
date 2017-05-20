var express = require('express');
var fs = require('fs');
var app = express();

var filename = process.argv[3];
var port = Number(process.argv[2]);

app.get('/books', function(req, res) {
  fs.readFile(filename, function (err, data) {
    if (err) {
      console.log(err);
      res.send(500);
    }
    var books = JSON.parse(data)
    res.send(books);
  });
});

app.listen(port)
