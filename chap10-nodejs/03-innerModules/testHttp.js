const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Hello World\n');
    res.end();
}).listen(1337);
console.log('服务器运⾏中...');