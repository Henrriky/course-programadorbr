const express = require('express');
const path = require('path');

//Instânciando objeto express
const app = express(); 

app.listen(5000, () => {
    console.log("Server is running in port 5000");
})

app.get("/", (req, res) => {
    console.log(req)
    res.send("<h1>Hello World</h1>")
})