function ola() {
    console.log("ola");
}
function tchau() {
    console.log("tchau");
}

function saudacao(s, nome){
    s(); //Callback
    console.log(nome)
}

saudacao(ola, "Igor");
saudacao(tchau, "Igor");

//CASO REAL
let usuarios = ["Adriano", "Marica", "Jose"];

function inserirUsuario(nome, callback){
    setTimeout(() => {
        usuarios.push(nome);
        callback();
    }, 1000);
}

function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuario("Igor", listarUsuarios); //Com essa callback resolvemos o problema do banco não listar o usuário que foi adicionado

/*
- A callback serve para nós fazermos algo que não é em tempo real(assíncrono), executar apenas depois desse tempo
passar.

*/

