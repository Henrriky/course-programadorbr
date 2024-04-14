var aluno = {
    matricula: 1234,
    nome: "Marcos",
    telefone: 1198777271,
    cidade: "São paulo"
}
var aluno1 = {
    matricula: 1231,
    nome: "Paulo",
    telefone: 119877127271,
    cidade: "São paulo"
}

/* Com a desestruturação podemos pegar apenas uma propriedade do objeto
- É preciso respeitar o nome das propriedades do objeto
*/
var { matricula, nome, telefone } = aluno;
console.log(matricula); //1234
console.log(nome); //Marcos

var {...copia} = aluno; //Pega todas as propriedades do objeto;
var copia2 = {...aluno};
var {nome,...copia3} = aluno; //Pega todas as propriedades do objeto menos o nome,



/*=====================ARRAYS================================*/
var alunos = [aluno, aluno1]; 
var [ marcos, paulo, ...rest ] = alunos; //No array a desestruturação ocorre pelo índice e não pelo nome
console.log(marcos); //Objeto marcos
