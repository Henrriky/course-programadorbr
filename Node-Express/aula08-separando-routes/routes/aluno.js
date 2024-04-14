var express = require("express");
var router = express.Router();

let alunos = [
    {id: 0, nome: "Maria"},
    {id: 1, nome: "Maria"},
    {id: 2, nome: "Maria"},
    {id: 3, nome: "Maria"},
]

router.get("/aluno", (req, res, next) => {
    
    let aluno = alunos[req.body.id];
    if (aluno) {
        res.json(aluno);
    } else {
        next()
    }
})


router.get("/aluno", (req, res, next) => {
    
    let aluno = alunos[req.query.id];
    if (aluno) {
        res.json(aluno);
    } else {
        res.send("Aluno não encontrado")
    }

})

router.get("/aluno/all", (req, res) => {
    res.json(JSON.stringify(aluno));
})

router.get("/aluno/:id", (req, res) => {
    let aluno = alunos.filter(aluno => {
        aluno.id === req.query.id
    })

    res.json(JSON.stringify(aluno));
})

module.exports = router;