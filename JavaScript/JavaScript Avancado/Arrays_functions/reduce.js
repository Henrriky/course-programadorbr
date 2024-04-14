function novoAluno(nome, idade) {
    return { nome, idade };
}

let alunos = [
    novoAluno("Mario", 35),
    novoAluno("Jose", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35)
]

function idadeDaTurma(total, aluno) {
    return total + aluno.idade;
}

console.log(alunos.reduce(idadeDaTurma, 0)); //132

const pokemons = [
    {
        name: "Pikachu",
        type: "Eletric"
    },
    {
        name: "Squirtle",
        type: "Water"
    },
    {
        name: "Magikarp",
        type: "Water"
    },
]

const pokemonsPorTipo = pokemons.reduce((pokemonsPorTipo, pokemonAtual) => {
    //pokemonAtual = pokemons[0]
    //pokemonAtual = pokemons[1]
    //pokemonAtual = pokemons[2]
    pokemonsPorTipo[pokemonAtual.type] = pokemonsPorTipo[pokemonAtual.type] || []; // {Eletric:}
    pokemonsPorTipo[pokemonAtual.type].push(pokemonAtual); // {Eletric: [{name: "Pikachu", type: "Eletric"}], Water: [{name: "Squirtle"}]}
    return pokemonsPorTipo;
}, {})

console.log(pokemonsPorTipo);