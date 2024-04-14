const express = require('express');
const fs = require('fs');
const app = express();

let user = {
    id: 1,
    name: 'John',
    phone: "(222) 555-5555"
}

function render(data, obj) {
    for(let key in obj) {
        data = data.replace(`{{${key}}}`, obj[key])
    }

    return data;
}

app.get("/", (req, res) => {
    fs.readFile('./template/user.html', 'UTF8', (error, data) => {
        if(!err) {
            // data = data.replace("{{Nome}}", user.name);
            // data = data.replace("{{Telefone}}", user.phone);
            res.send(render(data, user));
        }
    })
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})