function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
];

function alunoDaqA5Anos(aluno){
    let novoAluno = [...aluno];
    novoAluno.idade += 5;
    return novoAluno;
}

console.log(alunos.map(nomeIdade));
console.log(alunos.map(aluno => {
    return aluno.idade + " - " + aluno.nome;
}));

/* 
- Arrays e Objetos quando são definidos em outra variável são reconhecidos como referência
*/
//Solução
let turmaA = ["Igor", "Joao"];
let turmaB = turmaA.slice();
let turmaC = [...turmaA];
turmaB.push("Paulo")



//Com objetos
let alunoA = {nome: "Igor", idade: 15};
let alunoB = Object.assign({}, alunoA);
let alunoC = {...alunoA};
alunoB.idade = 25;



