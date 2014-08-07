var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
  response.sendfile('./views/expressapp.html');
});


server.listen(3000, function() {
  console.log('server is running on port 3000');
});
