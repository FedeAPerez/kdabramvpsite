// server.js
var express        	= require('express');
var bodyParser     	= require('body-parser');
var path = require('path');
var app            	= express();

const port 				= 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public/views')));


app.get('/', function (req, res) {
  res.render('/index', {});
});

app.get('/test', function(req, res) {
	res.render(path.join(__dirname + '/public/views/test'), {});
});


app.listen((process.env.PORT || 8000), () => {
  	console.log('Se está ejecutando en el puerto: ' + port);
});     
          