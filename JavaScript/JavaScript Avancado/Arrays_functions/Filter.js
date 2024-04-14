// FILTER
function newStudent(name, age) {
    return {name, age}
}


let students = [
    newStudent("Mario", 23),
    newStudent("José", 45),
    newStudent("Marcia", 29),
    newStudent("João", 35)
];

// Vamos filtrar(filter) apenas os alunos que possuem menos de 30 anos
for(let student of students){
    if(student.age < 30) {
        console.log(student);
    }
}

function isUnder30(student) {
    return student.age < 30
}

let studentsUnder30 = students.filter(isUnder30);
console.log(StudentsUnder30); //Mario e Marcia

let studentsOver30 = students.filter((student) => {
    return student.age > 30; //Se retornar verdadeiro, o elemento é armazenado no array do filter
})
console.log(studentsOver30);

function filtro(callback){
    let alunosFiltrados = [];
    for (let student of this) {
        if(callback(student)){
            alunosFiltrados.push(student);
        }
    }

    return alunosFiltrados;
}

//Criando um método para o students
students.filtro = filtro;

console.log(alunos.filtro(isUnder30));




