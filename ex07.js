var express = require('express');
var app = express();

var port = Number(process.argv[2]);

app.get('/search', function(req, res) {
  var query = req.query;
  res.send(query);
});

app.listen(port)
