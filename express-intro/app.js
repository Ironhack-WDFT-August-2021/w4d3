// set up express
const express = require('express');
const app = express();

// this registers the public folder it can be accessed in the browser
app.use(express.static(__dirname + '/public'));

const port = 5000;
// this is a route
app.get('/', function (req, res) {
	// console.log('home page');
	// console.log(__dirname);
	// res.send('<h1>This is the home page</h1>');
	res.sendFile(__dirname + '/views/home-page.html');
});

app.get('/dog', (req, res) => {
	// res.send('<h1>This is the dog page 🐕</h1>')
	res.sendFile(__dirname + '/views/dog-page.html');
});

// start the server
app.listen(port, function () {
	console.log(`Server listening on port ${port}`)
});