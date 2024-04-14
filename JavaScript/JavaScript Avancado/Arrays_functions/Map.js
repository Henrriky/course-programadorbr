function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
];

/*
MAP 
- Ele não traz os elementos filtrados
- Ele traz um array novo, que pode ser criado em cima do array que chamou a função map

*/

function nomeIdade(aluno){
    return aluno.nome + " tem " + aluno.idade + " anos";
}

console.log(alunos.map(nomeIdade));
console.log(alunos.map(aluno => {
    return aluno.idade + " - " + aluno.nome;
}));



