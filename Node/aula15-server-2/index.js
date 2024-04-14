const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {

    let pathName = url.parse(req.url).pathname;

    if(pathName === "/") {
        pathName = "./index.html"
    }

    let fileName = "." + pathName;

    fs.readFile(fileName, (err, data) => {
        if(err) {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end("<h1>Página não encontrada</h1>")
        } else {
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write(data);
            res.end();
        }
    })

}).listen(3000, (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log('Servidor funcionando')
    }
})