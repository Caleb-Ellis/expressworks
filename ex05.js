var express = require('express');
var app = express();

var filepath = process.argv[3];
var port = Number(process.argv[2]);

app.use(require('stylus').middleware(filepath));
app.use(express.static(filepath));

app.listen(port)
