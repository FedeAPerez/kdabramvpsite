// server.js
var express        	= require('express');
var bodyParser     	= require('body-parser');
var path = require('path');
var app            	= express();

const port 				= 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.all(/.*/, function(req, res, next) {
  var host = req.header("host");
  if (host.match(/^www\..*/i)) {
    next();
  } else {
    res.redirect(301, "http://www." + host);
  }
});
// Se usa para dar diferentes varianes del site
function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

app.get('/', function (req, res) {
    res.render(path.join(__dirname + '/public/views/index.html'), {});
});
app.get('/es', function (req, res) {
    res.render(path.join(__dirname + '/public/views/index.html'), {});
});

app.get('/en', function (req, res) {
    res.render(path.join(__dirname + '/public/views/indexen.html'), {});
});


app.post('/contact', function (req, res) {
  console.log("se llamo al metoyodo con el req " + JSON.stringify(req.body));
  res.sendStatus(200)
});

app.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow: /");
});

app.use(express.static(path.join(__dirname + '/public/views')));
app.listen((process.env.PORT || port), () => {
  	console.log('Se está ejecutando en el puerto: ' + port);
});     
          
