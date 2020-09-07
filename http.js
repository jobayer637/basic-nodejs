const http = require('http')
const fs = require('fs')
const os = require('os')

let port = 3000
let addr = '127.0.0.1'

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if (err) throw err
        res.write(data)
        res.write(os.hostname())
        res.write(os.networkInterfaces().myNet[1].address)
        res.end()
    })
})

server.listen(port, addr, () => {
    console.log(`server is running in port ${port} and addr is ${addr}`)
})