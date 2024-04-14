const express = require('express');
const path = require('path');

//Instânciando objeto express
const app = express(); 

app.listen(5000, () => {
    console.log("Server is running in port 5000");
})

app.use(
    "/meusite",
    express.static( //Acessa a pasta client para pegar o arquivo HTML
        path.join(__dirname, "client")
    )
)

app.post("/", (require, response) => {
    response.send("<h1>Hello World from POST</h1>");
})

app.put("/", (require, response) => {
    response.send("<h1>Hello World from PUT</h1>");
})

app.delete("/", (require, response) => {
    response.send("<h1>Hello World from DELETE</h1>");
})


/* 
- Com a função app.post() nós podemos executar uma função com a requisição e a resposta toda vez que o usuário requisitar 
um caminho específico. O método HTTP POST serve para realizar uma postagem ou adicionar algo no nosso servidor ou banco
de dados
    - Nesse caso nós usamos primeiro o método app.use() para acessar o arquivo index.html, e esse arquivo fez uma 
    requisição para o nosso servidor com a função fetch do js através do método post, e o servidor retornou um arquivo 
    de resposta do tipo HTML
- Para utilizar os método put ou delete é só colocar na frente do app.nomeDoMétodoHTTP();

*/