var pessoa = {
    name: "José Silva",
    idade: 32,
}

var contato = {
    telefone: 8727171,
    email: "jose@gmail.com"
}

var copia = pessoa; //Referencia
var copia = {...pessoa}; //Valor
copia.idade = 88;
console.log(pessoa); // {name: "José Silva", idade: 32,}
console.log(copia); //  {name: "José Silva", idade: 88,}

//Com o spread operator nós somos capazes de fazer a junção de dois objetos
var copiaJunta = {...pessoa, cidade: "Rio de Janeiro"}; // {name: "José Silva", idade: 32, cidade: "Rio de janeiro"}
var pessoaTelefone = {...pessoa, ...contato}; // {name: "José Silva", idade: 32, telefone: 8727171, email: "jose@gmail.com"}

//ARRAYS
var notas_turma1 = [10, 8, 4, 3];
var notas_turma2 = [4, 5, 4, 6];
var todas_notas = [...notas_turma1, ...notas_turma2];
var todas_notas_diferente = [notas_turma1, notas_turma2];

console.log(todas_notas); //[10, 8, 4, 3, 4, 5, 4, 6]
console.log(todas_notas_diferente); //[[10,8,4,3],[4,5,4,6]]