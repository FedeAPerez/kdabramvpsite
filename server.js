// server.js
var express        	= require('express');
var bodyParser     	= require('body-parser');
var app            	= express();

const port 				= 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

require('./app/routes')(app);

app.get('/', function (req, res) {
  res.render('index', {});
});

app.listen((process.env.PORT || 8000), () => {
  	console.log('Se está ejecutando en el puerto: ' + port);
});     
          