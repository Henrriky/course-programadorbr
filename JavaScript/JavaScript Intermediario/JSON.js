let a = {
    nome: "Igor",
    nota: 8.5
}

console.log(a);

// JSON - É a representação de um objeto

JSON.stringify // Pega um objeto JSON e tranforma em uma string
JSON.parse //Pega uma string e transforma em um JSON


let stringify = JSON.stringify(a);
console.log(stringify) // STRING

let parse = JSON.parse(stringify);
console.log(parse); // OBJECT

// CRIAR UMA STRING JSON
let stringJson = '{"nome": "fabio", "nota": 7.8}'