const express = require('express'); //Importando o Módulo
const path = require('path'); //Importando o módulo Path

const app = express(); //Iniciando um objeto do tipo express


//Com o IPCONFIG Conseguimos acessar o site pelo celular, caso ele esteja na mesma rede do servidor
app.listen(5000, () => { //Callback function
    console.log(`Server running on port: 5000`)
})


//O express static busca o arquivo index.html
app.use(
    "/meusite", //Esse parâmetro faz com que o usuário tenha que acessar um caminho adicional para acessar o index.html
    express.static(
        path.join(__dirname, 'client')  //__dirname equivale ao ponto, e o segundo é a pasta
    )
);

/*
- No express nós não precisamos reiniciar o servidor quando alteramos o arquivo index.html, pois ele é chamado toda vez
que é feita uma nova requisição.
- Porém, todo arquivo js alterado não é reconhecido até que o servidor reinicie

*/
