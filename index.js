import http from "node:http"

const port = 3000

const server = http.createServer((req, res) =>{
    const { url, method } = req

    if(url == '/' && method == 'GET'){
        return res.end(JSON.stringify({
            status: 200,
            body: '200 OK'
        }
        ))
    }

    res.statusCode = 404
    return res.end(
        JSON.stringify({
            status: 404,
            body: '404 (not found)'
        })
    )
})

server.listen(port, () =>{
    console.log('Server is running, port: ' + port)
})