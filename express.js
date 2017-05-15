var express = require('express');
var app = express();
///
app.use(express.static(__dirname + '/public'));

// var http = require('http');
var randomArray = require('./random.js');

//
app.get('/', function (req, res) {
  res.send('You made an Express Server');
});

app.get('/random-quotes', function (req, res) {
  res.send(randomArray.randomQuotes[Math.floor(Math.random() *
randomArray.randomQuotes.length)]);
});

app.get('/quotes', function (req, res) {
  res.send(randomArray.randomQuotes);
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
