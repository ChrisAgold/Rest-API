//******NODE.JS SERVER EXAMPLE CODE******//
const http = require('http');
// create server
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
// to get data from database, using array for example purposes
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

// server listening on port 3000 => localhost:3000/api/courses
server.listen(3000);

console.log('Listening on port 3000.....');


