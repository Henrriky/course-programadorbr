const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const alunos = require('./routes/aluno');

app.use(bodyParser.urlencoded()); 

// http://localhost:5000/api/aluno/
app.use("/api", alunos)

app.listen(5000, () => {
    console.log("Server is running in port 5000");
})

app.get("/", (req, res) => {
    res.send("Hello World!");
})



