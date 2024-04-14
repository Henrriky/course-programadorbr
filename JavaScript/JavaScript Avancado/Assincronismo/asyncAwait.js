let usuarios = ["Adriano", "Marica", "Jose"];

function inserirUsuario(nome) {

    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            usuarios.push(nome);
            let error = false;
            if (!error) {
                resolve("Usuário inserido com sucesso!");
            } else {
                reject({
                    msg: "Erro de ..."
                })
            }
        }, 1000);
    }); //É um objeto que recebe uma função como argumento
    return promise;
}

function listarUsuarios(){
    console.log(usuarios);
}

async function executar() {
    await inserirUsuario("Igor"); //O Programa não vai continuar até que essa função seja resolvida
    listarUsuarios();
}

executar();
console.log("oi")



// Uma função assíncrona é aquela que não executa em tempo real, ou seja, precisa esperar um tempo para que uma ação ocorra
// Já o síncrono, é aquele que executa de forma instantânea
// Programação assíncrona ocorre quando executamos uma tarefa em "segundo plano", sem nosso controle direto
// De forma padrão o JavaScript executa uma coisa por vez, respeitando a ordem delas
/*
- Com o async await o JavaScript vai separar seu código em dois, coisas que rodam agora, coisas que vão rodar
depois de algo acontecer
- Assíncrono, manter a aplicação funcionando mesmo que tenha uma função que seja executada de forma assíncrona
- Ou seja, o Javascript não vai ter que ficar esperando a função assincrona terminar para executar o restante do código.
- Isso só vai acontecer dentro do escopo da função async, onde você irá especificar que ação deverá ser feita após 
determinado tempo
- Fora do escopo a função funcionará normalmente


*/


