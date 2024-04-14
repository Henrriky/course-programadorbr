const Person = require('./Person');

class Aluno extends Person {
    
    constructor(name, age, turma) {
        // this.name = name;
        // this.age = age;
        super(name, age);
        this.turma = turma;
    }

    // @override
    greetings() {
        console.log("Olá, tudo bom? Meu nome é:", this.name, "e estou na turma", this.turma)
    }
}

module.exports = Aluno;