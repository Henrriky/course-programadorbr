const http = require('http');

http.createServer((request, response) => {

    // response.writeHead(200, {'Content-type': 'text/html'}); //text/plain
    // response.end("<h1>Hello World!</h1>");

    response.writeHead(200, {'Content-type': 'application/json'}); //text/plain
    response.end(JSON.stringify({ texto: "<h1>Hello World!</h1>" }));

}).listen(3000, (error) => {
    if(error) console.log(error) 
        else console.log('Servidor rodando')
})