const firebaseConfig = {
    apiKey: "AIzaSyApmeGmDW-ys7pq8mQu0pqvFd6v4JGbaJ4",
    authDomain: "coleio.firebaseapp.com",
    projectId: "coleio",
    storageBucket: "coleio.appspot.com",
    messagingSenderId: "540377931828",
    appId: "1:540377931828:web:f99d0ff0d1a0d39884ea61",
    measurementId: "G-PX4P1HHRZW"
};


firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();




//===================SELECIONANDO OS ALUNOS, E PERCORRENDO ELES==================== //
// db.collection("turmaA").get()
//                         .then((snapshot) => {
//                             snapshot.forEach((document) => { //Percorre um array, que tem o id dos dois alunos
//                                 let aluno = document.data();
//                                 console.log(aluno.nome)
//                                 console.log(document.data())
//                             })
//                         })








//===================SELECIONANDO ALUNO DE ACORDO COM O ID DO DOCUMENTO ==================== //
// let docRef = db.collection("turmaA").doc("NZIDXhVvHLs6XuoJu3w6");
// docRef.get().then((document) => {
//     console.log(document.data())
// })








//=====================SELECIONANDO ALUNO DE ACORDO COM O NOME DELE, MAIOR QUE UMA PALAVRA OU NUM======================//
//   -> No where podemos usar o <=, >=, ou ==
// db.collection("turmaA").where("nome", "==", "Henrriky").get()
//     .then(snapshot => {
//         snapshot.forEach(doc => {
//             let aluno = doc.data();
//             console.log(aluno.nome)
//         })
//     })









//=====================CRIANDO E ALTERANDO DOCUMENTOS======================//
// const TURMA = "turmaA";
// db.collection(TURMA).add({
//     nome: "Marcos",
//     sobrenome: "Santos",
//     notas: {nota1: 9.6, nota2: 10}

// }).then(document => {
//     console.log("Documento inserido com sucesso", document);
// }).catch(error => console.log(error));

/* Para modificar um elemento é necessário passar o mesmo ID e alterar o valor dele. */
// Esse método sobrescreve o valor antigo
// db.collection(TURMA).doc("alunoNovoID")
//     .set({
//         nome: "Mariana",
//         sobrenome: "Oliveira",
//         notas: { nota1: 9.6, nota2: 7.1 }
//     }).then(document => console.log("Documento inserido com sucesso", document))
//     .catch(error => console.log(error));

/* Com o merge podemos juntar os dados antigos com os novos */
// db.collection(TURMA).doc("alunoNovoID")
//     .set({
//         sobrenome: "Oliveira",
//     }, { merge: true }).then(document => console.log("Documento inserido com sucesso", document))
//     .catch(error => console.log(error));

/* UPDATE */
//Também somos capazes de adicionar novos atributos ao nosso aluno, apenas colocando uma nova chave e valor que não exista
// db.collection(TURMA).doc("alunoNovoID").update({
//     sobrenome: "Oliveira",
//     "notas.nota1": 9,
//     novoCampo: "Este é um novo campo",
//     cidades: ["Rio de Janeiro", "São Paulo"],
    
// }).then(document => console.log("Documento inserido com sucesso", document)).catch(error => console.log(error));

/* ADICIONAR DADOS AO ARRAY */
// db.collection(TURMA).doc("alunoNovoID").update({
//     cidades: firebase.firestore.FieldValue.arrayUnion("Pernambuco", "Vitória")

// }).then(document => console.log("Documento inserido com sucesso", document)).catch(error => console.log(error));

/* REMOVER DADOS DO ARRAY */
// db.collection(TURMA).doc("alunoNovoID").update({
//     cidades: firebase.firestore.FieldValue.arrayRemove("Vitória"),
//     faltas: firebase.firestore.FieldValue.increment(1),

// }).then(document => console.log("Documento inserido com sucesso", document)).catch(error => console.log(error));

/*============================ON SNAPSHOT - ATUALIZAÇÃO EM TEMPO REAL========================*/
// db.collection("turmaA").onSnapshot(snapshoot => { //Toda vez que o banco mudar, ele irá executar essa função
//     snapshoot.forEach(document => {
//         let aluno = document.data();
//         console.log(aluno);
//     })
// })

/*==============================DELETE=================================*/
//Deletar um campo
// db.collection("turmaA").doc("alunoNovoID").update({
//     cidades: firebase.firestore.FieldValue.delete()
// })
//Deletar um documento
// db.collection("turmaA").doc("alunoNovoID")
//     .delete()
//         .then(() => {
//             console.log("Documento removido com sucesso")
//         })
//             .catch(error => { console.log(error) });
//Deletar todos os documentos




/*==========================CRIANDO USUARIOS NO FIREBASE==================*/
/*
- O firebase já possui essa funcionalidade de authenticação, que fica em authentication
- É necessário clicar la e ir em -> Configurar método de login -> Escolha o método de login -> Ative o método desejado e clique em salvar
- É possível criar um usuário através do código ou da interface do firebase
*/
// let auth = firebase.auth();
// function criarUsuario() {
//     let newUserEmail = "novoteste@teste.com";
//     let newUserPassword = "123ABC";
//     //Método de criação de login
//     auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword) //Para saber essas coisas é necessário consumir a documentação
//         .then(user => {
//             console.log(user)
//         })
//             .catch(error => {
//                 console.log(error);
//             })
// }

// /*==========================GERENCIANDO LOGINS NO FIREBASE==================*/
// // let user  = auth.currentUser; //Verifica se o usuario esta logado
// //Logar o usuário - SigIn
// function login() {
//     let userEmail = "novoteste@teste.com";
//     let userPassword = "123ABC";
//     auth.signInWithEmailAndPassword(userEmail, userPassword)
//         .then(loggedUser => console.log(auth.currentUser)) //Com o currentUser conseguimos acessar o usuario que está logado
//             .catch(error => { console.log(error)})
// }
// // login();
// /* Verificando se o usuário está logado
// - Essa função fica verificando cada mudança no estado de logado do usuário, disparando o callback toda vez que esse estado muda
// */
// auth.onAuthStateChanged(user => {
//     if(user){
//         console.log(user)
//     } else {
//         console.log('Ninguem logado')
//     }
// });

// // LOGOUT
// function logout() {
//     auth.signOut()
//         .then(() => {console.log('Usuario deslogado')})
//             .catch(error => console.log(error))
// }

// setTimeout(logout, 2000)
// /*==========================PERSISTENCIA DE SESSÃO DE LOGIN==================*/
// function loginWithSession() {
//     let userEmail = "novoteste@teste.com";
//     let userPassword = "123ABC";

//     auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
//         .then(() => {
//             auth.signInWithEmailAndPassword(userEmail, userPassword)
//                 .then(loggedUser => console.log(loggedUser))
//                     .catch( error => console.log(error))
//     })
           
    
//     // LOCAL -> Ele vai persistir não importa quantas abas eu abra
//     // SESSION -> Ele vai persistir apenas para aquela aba
//     // NONE -> Ele não vai persistir os dados
//     auth.signInWithEmailAndPassword(userEmail, userPassword)
//         .then(loggedUser => console.log(auth.currentUser)) //Com o currentUser conseguimos acessar o usuario que está logado
//             .catch(error => { console.log(error)})  
// }

/*==========================PERMISSOES==================*/