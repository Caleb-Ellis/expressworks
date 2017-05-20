var express = require('express')
var path = require('path');
var app = express();

var filepath = process.argv[3];
var port = Number(process.argv[2]);

app.use(express.static(filepath||path.join(__dirname, 'public')));

app.listen(port)
