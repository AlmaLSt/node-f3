const http = require('http')
const hostname = '127.0.0.1'
const port = 3003

const response = {
    success: true,
    canIGetCoffee: false,
    responseCode: 0123
}

const server = http.createServer((req, res) =>{
    res.statusCode = 418
    res.setHeader('Content-Type', 'text/plain')
    res.end(JSON.stringify(response))
}) 

server.listen(port, hostname, ()=>{
    console.log('Server executing')
})