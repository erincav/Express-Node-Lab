var http = require('http');
var randomArray =
require('./random.js');
console.log(randomArray);

http.createServer(function(request, response){
  response.writeHead(200, {"Content-type": "text/plain"});
  response.write(randomArray.randomQuotes[
    Math.floor(Math.random() *
  randomArray.randomQuotes.length)]);
  response.end();

}).listen(8080);
