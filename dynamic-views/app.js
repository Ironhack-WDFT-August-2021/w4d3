// set up express
const express = require('express');
const app = express();


// this we need to set if we use hbs
app.set('view engine', 'hbs');

// this registers the public folder it can be accessed in the browser
app.use(express.static(__dirname + '/public'));

const port = 5000;
// this is a route
app.get('/', function (req, res) {
	const todoList = ['learn node', 'learn react', 'play chess', 'eat dinner'];
	const user = 'Bar';
	const people = [{ name: 'Bob' }, { name: 'Alice' }]
	const someHTML = '<h1>Some html created on the server</h1>';
	// if we use hbs -> res.render()
	res.render('index', { user: user, list: todoList, persons: people, html: someHTML })
});

const movies = require('./movies.json');

app.get('/movies', (req, res) => {
	console.log(movies);
	res.render('movies', { moviesList: movies });
})


// start the server
app.listen(port, function () {
	console.log(`Server listening on port ${port}`)
});