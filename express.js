var express = require('express');
var app = express();
var randomArray = require('./random.js');


app.use(express.static(__dirname + '/public'));


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
