const express = require('express');
const path = require('path');
const app = express(); 
const bodyParser = require('body-parser');
let alunos = [
    {id: 0, nome: "Maria"},
    {id: 1, nome: "Maria"},
    {id: 2, nome: "Maria"},
    {id: 3, nome: "Maria"},
]

app.use(bodyParser.urlencoded()); 

app.listen(5000, () => {
    console.log("Server is running in port 5000");
})

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/alunos", (req, res) => {
    res.json(JSON.stringify(alunos));
})

app.get("/aluno", (req, res) => {
    
    let aluno = alunos.filter(aluno => {
        aluno.id === req.body.id
    })

    res.json(JSON.stringify(aluno));
})

//localhost:5000/aluno/3
app.get("/aluno/:id", (req, res) => {
    
    let aluno = alunos.filter(aluno => {
        aluno.id === req.params.id
    })

    res.json(JSON.stringify(aluno));
})

//localhost:5000/aluno?=id1
app.get("/aluno/", (req, res) => {
    
    let aluno = alunos.filter(aluno => {
        aluno.id === req.query.id
    })

    res.json(JSON.stringify(aluno));
})

/*
- Na função urlenconded do bodyParser nós conseguimos pegar formulários que são enviados pelo body


*/