var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/css/index.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'index.css'));
});

app.get('/ui/js/main.js', function(req, res){
   res.sendFile(path.join(__dirname, 'ui/js', 'main.js')); 
});

app.get('/ui/img/logo.png', function(req, res){
    res.sendFile(path.join(__dirname, 'ui/img', 'logo.png'));
});

app.get('/ui/img/1.jpg', function(req, res){
  res.sendFile(path.join(__dirname, 'ui/img', '1.jpg'));
});

// App is running on port 80
// Use localhost:80

var port = 80;
app.listen(port, function () {
  console.log(`Hotel app listening on port ${port}!`);
});
