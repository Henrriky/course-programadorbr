# Socket IO

- Socket IO é uma solução baseado em Web Socket. Os Web Sockets permitem que o back-end mandem uma mensagem para o front-end. Até o momento nós utilizamos o fluxo de o front-end fazer as requisições para o back-end. Entretanto, com o Web Socket a gente vai conseguir fazer com que na hora que um dado seja alterado no Back-end ele mande uma mensagem para o front-end e ele seja capaz de atualizar a sua tela.

# Problema que o Socket.io resolve

- Na aplicação dentro do socket-teste temos um front-end que faz um fetch no back-end e busca uma lista e exibe ela em uma div. O problema é que no caso de a lista ficar recebendo novos valores constantemente, o front-end só mudaria se nós atualizassemos a página, e isso não é algo desejado.
- Para resolver isso atualmente, nós fazemos com que o fetch seja chamado várias vezes. O problema é que ao fazer isso, o back-end recebe uma alta demanda de requisições, e isso causa problema de perfomance. E é com esse tipo de problema que o socket.io lida.

# Conectando o front com o back

- `npm i socket.io`
- Devemos fazer com que o módulo http fique responsável por gerenciar todas as requisições
    ```javascript 
        const server = http.Server(app)

        server.listen(3000, () => {
            console.log('listening on port 3000');
        })

        const io = socketIO(server)
    
    ```
- OU
    ```javascript 
        
        const server = app.listen(3000, () => {
            console.log('listening on port 3000')
        })

        const io = socketIO(server)
    ```
- O IO vem de Input e Output, ou seja, ele vai ficar verificando se existe alguma coisa chegando e com isso ele responde algo. Para isso utilizamos o `on`, que funciona como o listen
    - Dentro dele podemos passar alguma função que vai ser executada quando esse evento acontecer. O evento mais comum é o connection, que é utilizado para dizer que algum usuario se conectou com o nosso Socket. A função vai receber o Socket, que é a conexão entre o back-end e o front-end. Cada navegador é um socket diferente, ou seja, ele é a representação de um navegador
    ```javascript
    io.on('connection', (socket) => {
        console.log("New connection")
    })
    
    ```
- Para utilizar o Socket.io no front-end devemos importa-lo
    - ```html
        <script src="/socket.io/socket.io.js"></script> 
        <script>
        const socket = io('http://localhost:3000')
        </script>
      ```

# Enviando mensagens

- A função `socket.emmit('')` envia uma mensagem para o front-end
- Para receber essa mensagem no front-end nós usamos a função 
    ```javascript
        //Back-end - Enviando
        io.on('connection', (socket) => {
            console.log("New connection")
            socket.emit('Hello', { msg: "Seja bem vindo!" })
        })

        //Front-end - Recebendo
        const socket = io('http://localhost:3000')
        socket.on('Hello', (data) => {
            console.log(data.msg)
        })
    ```
- Enviar mensagem do front-end para o back-end
    ```javascript
        //No front-end
        socket.on('Hello', (data) => {
            //Emitindo
            socket.emit('hello_client_response', { msg: "Tudo certinho" })
        })
        //No back-end
        //Recebendo
        socket.on('hello_client_response', (data) => {
            console.log(data.msg)
        })
    ```

# Enviando mensagem para vários sockets

- As mensagens que são enviadas para os sockets são diferentes uma das outras
- Para enviar para todo mundo, nós vamos usar o IO:
    ```javascript
        io.emit('hello', { msg: `Seja bem vindo! ${random}` })
    ```
- Os sockets que forem abertos vão receber um novo valor, mas os sockets já abertos receberão todas as mensagens enviadas para cada novo socket aberto posteriormente
- Para que sockets novos consigam ver as mensagens anteriores:
    ```javascript
        const randoms = []
        const random = Math.random();
        randoms.push(random)
        io.emit('hello', { msg: `Seja bem vindo! ${randoms}` })
    ```
- Como dizer para os usuários conectados que chegou um usuario novo, menos para quem entrou.

    