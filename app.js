var http = require('http')
var addr = '127.0.0.1'
var port = 3000

var server = http.createServer((req, res)=>{
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
})

server.listen(port, addr, ()=>{
    console.log(`server is running in port ${port}`)
})