const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express(); 

const consoleBody = (req, res, next) => {
    console.log(req.body);
    next("Error de qualquer coisa");
}
const hello = (req, res) => { 
    res.json({
        name: "Igor"
    })
}


app.listen(5000, () => {
    console.log("Server is running in port 5000");
})

app.get("/get", consoleBody, hello)


app.use("/", bodyParser.json());
app.use("/", consoleBody);

/*
- O middlware é a função de callback que é especificada no segundo parâmetro da função app.get(), e essa callback detém
das informações de requisição.
- É possível passar vários middlewares como parâmetro
- Para que seja possível passar para o próximo middleware nós precisamos passar mais um parâmetro, que é o "next".
- Quando passamos algo para esse next, quer dizer que aconteceu um erro no nosso servidor
- A função app.use() faz com que a requisição funcione para qualquer método
*/


// app.use("/", (req, res) => {
//     res.send("Essa requisição funciona para qualquer método!")
// })