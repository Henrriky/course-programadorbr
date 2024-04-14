// let soma = require("./soma"); //Importando o módulo soma
// let mult = require("./mult"); //Importando o módulo mult
let calc = require("./calc");
//ou
let { mult, soma } = calc;

// console.log(process.argv); //Retorna um array com os argumentos passados pelo node
let args = process.argv.slice(2); //Slice corta os dois primeiros números do array e retorna o resto
let a = Number(args[0]);
let b = Number(args[1]);
let c = soma(a, b);
let d = mult(a, b);

console.log(c);
console.log(d);

