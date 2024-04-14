const express = require('express');
const path = require('path');

const app = express();

app.listen(5000, () => {
    console.log(`Server running on port: 5000`)
})

app.get("/", (request, response) => {
    response.set("Content-Type", "text/html")
    response.send("<h1>Hello World from GET, with path '/'</h1>")
})


/* 
- Com a função app.get() nós podemos executar uma função com a req e resposta sempre que o usuário acessar
determinado caminho do nosso site
    - Toda função app.get possui como parâmetro do callback uma requisição e uma resposta
    - Uma boa prática é sempre retornar uma resposta para um pedido
    - No Express, nós utilizamos response.send("") para enviar uma resposta para a requisição
    - Para definir o tipo de retorno do usuário, ou seja, definir os cabeçalhos, nós usamosa função res.type() e o 
    tipo dentro do parenteses, para que seja enviado para o usuário um HTML ou um arquivo JSON
        - res.set("Content-Type", "text/plain")
        - res.type("txt")
        - res.type("json")
        - res.type("html")
        - Ou também podemos usar o res.set() e definir de forma mais específica os cabeçalhos



*/