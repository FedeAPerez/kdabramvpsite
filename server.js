// server.js
var express        	= require('express');
var bodyParser     	= require('body-parser');
var path = require('path');
var app            	= express();

const port 				= 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/public/views/test.html'), {});
});

app.get('/seetest', function (req, res) {
  res.render(path.join(__dirname + '/public/views/test2.html'), {});
});

app.post('/contact', function (req, res) {
  console.log("se llamo al metoyodo con el req " + JSON.stringify(req.body));
  res.send("ok");
});

app.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow: /");
});

app.use(express.static(path.join(__dirname + '/public/views')));
app.listen((process.env.PORT || 8000), () => {
  	console.log('Se está ejecutando en el puerto: ' + port);
});     
          