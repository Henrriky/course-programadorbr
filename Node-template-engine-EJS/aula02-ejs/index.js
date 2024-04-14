const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

let users = [
    { id: 1, name: "Igor oliveira", phone: "(222) 555-5555" },
    { id: 2, name: "Jose oliveira", phone: "(222) 555-5555" },
    { id: 3, name: "Marcos oliveira", phone: "(222) 555-5555" },
    { id: 4, name: "Lana oliveira", phone: "(222) 555-5555" }
]


app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");


app.get("/", (req, res) => {

    res.render('user', {users: users});

})

app.listen(3000, () => {
    console.log('listening on port 3000');
})