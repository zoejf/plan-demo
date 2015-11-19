var express = require('express');
var hbs = require('hbs');

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(3000, function() {
	console.log('I am listening');
});