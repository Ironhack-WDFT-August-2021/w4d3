// First node server
// we use the node internal module http

const http = require('http');

const server = http.createServer(function (request, response) {
	// console.log('this is the request handler');
	// console.log(request.url);
	if (request.url === '/') {
		// response.write('<h1>This is the home page</h1>');
		// response.end();
		response.end('<h1>This is the home page</h1>');
	} else if (request.url === '/about') {
		response.end('<h1>This is the about page</h1>');
	} else {
		response.end('<h1>404 - Not Found</h1>')
	}
	// response.end('<h1>hello from the server</h1><script>console.log(document)</script>');
});

// start the server
// common ports to use here : 3000, 5000, 8000, 5555
server.listen(3000, function () {
	console.log('Server listening on port 3000');
});