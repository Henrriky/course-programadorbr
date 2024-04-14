# O que é 

- O express é um framework para Node.js, feito para o desenvolvimento de requests e respostas
- [Documentação](https://expressjs.com/pt-br/)
- `npm init -y`
- `npm install express`

# HTTP REQUEST

- É uma convenção que possui um conjunto de regras a serem obedecidas para que o cliente e o servidor possam falar a mesma
"Lingua".
- A requisição tem três partes
    - Linha de requisição
        - Diz qual é o método que está sendo feito (GET, POST, PUT OU DELETE) 
        - O caminho que estamos mandando
        - Versão do HTTP
    - Header:
        - Toda informação necessária para que o servidor saiba como processar os dados, o header é importante pois vai definir qual o tipo de dado que vai ser respondido para o cliente
        - Define o tipo de dado que ta sendo enviado
    - Body
        - É onde vão estar os dados que são necessários para que o servidor seja capaz de fazer algo
        - Todo conteúdo que você precisa mandar para o servidor é enviado pelo body

# HTTP RESPONSE

- A resposta no HTTP tem três partes: 
    - Status
        - Contém a versão do protocolo HTTP
        - Código do Status
        - Mensagem do retorno do status
        - Dentro desse status nós temos famílias de possibilidades, podendo ser 100, 200, 300, 400 e 500
            - 100: Informativa
            - 200: Sucesso
                - 201: Usuário criado
            - 300: URL modificada
            - 400: Dado não foi achado no servidor
                - 404: Página inexistente
            - 500: Erro no servidor
    - Header
        - Informações importantes para o cliente lidar com a resposta
    - Body
        - Conteúdo retornado pelo processamento realizado no Back-end(Servidor)
        - Exemplo: Servidor retornando um html, nós o enviamos através do `response.send("Conteúdo")` ou `res.json({name: "Igor"})`

# MIDDLEWARES

- `npm i body-parser`