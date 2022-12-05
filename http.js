const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to hoem')
    }
    else if(req.url === '/about') {
        res.end('The about page')
    }
    else {
        res.end('Error')
    }
})


server.listen(5000);

console.log('Listening on port 5000...')