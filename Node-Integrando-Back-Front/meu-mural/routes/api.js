const express = require('express')
const bodyParser = require('body-parser');
const posts = require('../model/posts');
const cors = require('cors');
const router = express.Router();

router.use(cors());

router.get("/all", (req, res) => {

    res.json(JSON.stringify(posts.getAll()));

})

router.post("/new", bodyParser.json(), (req, res) => {

    let title =  req.body.title;
    let description = req.body.description;

    posts.newPost(title, description)

    res.send("Post adicionado");

})

router.delete("/delete", bodyParser.json(), (req, res) => {
    const id = req.body.id;
    const haveIdInRepository = posts.deletePost(id);

    haveIdInRepository ? res.send("Post deletado") : res.send("Post inexistente com o ID específicado")
})

module.exports = router