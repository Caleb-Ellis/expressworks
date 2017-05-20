var express = require('express')
var app = express();

var filepath = process.argv[3];
var port = Number(process.argv[2]);

app.set('views', filepath);
app.set('view engine', 'jade');

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
})

app.listen(port)
