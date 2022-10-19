const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const launchDate = new Date().toISOString()

const pingReq = {
    success: true,
    body: 'pong'
}

const healthReq = {
    success: true, 
    body: {
        version: '1.0',
        launchDate: launchDate
    }
}

const otherReq = {
    success: true,
    body: 'Bedu API V1'
}

const server = http.createServer((req, res) =>{
    if (req.url === '/ping' && req.method === 'GET') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end(JSON.stringify(pingReq))  
    } else if (req.url === '/health' && req.method === 'GET') { 
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end(JSON.stringify(healthReq)) 
    } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end(JSON.stringify(otherReq))
    }
    
}) 

server.listen(port, hostname, ()=>{
    console.log('Server executing')
})