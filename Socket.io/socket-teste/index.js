const express =  require('express');
const socketIO = require('socket.io')
const path = require('path');
// const http = require('http');
const app = express();

// const list = ["Jose", "Marcos", "Antonio"];

// console.log(list)

// setTimeout(() => {
//     list.push("Joao");
//     console.log(list)
// }, 5000)


// app.get('/list', (req, res) => {
//     res.send(list)
// })

app.use('/', express.static(path.join(__dirname, 'public')));

const server = app.listen(3000, () => {
    console.log('listening on port 3000')
})

const randoms = []



const io = socketIO(server)

io.on('connection', (socket) => {

        console.log("New connection")

        socket.broadcast.emit('hello', { msg: `Cheguei` }) 

        // socket.emit('Hello', { msg: `Seja bem vindo! ${random}` })

})

