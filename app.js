var express = require('express');
var app = express();

app.use(express.static('./'))

app.get('/', function (request, response) {
	response.send('your very first server. good work!');
	});

var server = app.listen(3000, function () {
	console.log('This server is listening at port 3000')
});