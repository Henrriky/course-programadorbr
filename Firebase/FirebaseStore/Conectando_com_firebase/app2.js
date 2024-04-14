/* PERMISSOES */

/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
- True: todo mundo pode alterar meu banco de dados
- False: Ninguem pode alterar meu banco de dados 
*/

let auth = firebase.auth();
function read(){
    db.collection("turmaA").get().then(snpshot => {
        snpshot.forEach(element => {
            console.log(element.data())
        });
    });
}

function write(){
    db.collection("turmaA").add({
        nome: "Katia",
        sobrenome: "Olieira",
        cidades: ["São Paulo", "Guarulhos"]
    })
        .then(doc => console.log(doc.data()))
        .catch(error => console.log(error));
}

/* PERMITIR LEITURA, NEGAR ESCRITA */
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;  
      allow write: if false;
    }
  }
}
- True: todo mundo pode alterar meu banco de dados
- False: Ninguem pode alterar meu banco de dados 
*/

/* PERMITIR LEITURA, NEGAR ESCRITA, PERMITIR APENAS SE ESTIVER LOGAD */
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read: if true;  
//       allow write: if request.auth.uid != null;
//     }
//   }
// }

/* PERMITIR LEITURA, NEGAR ESCRITA, PERMITIR APENAS SE ESTIVER LOGAD */
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read: if true;  
//       allow write: if request.auth.uid == idDesejadoDeAdministrador;
//     }
//   }
// }

function login(){
     let newUserEmail = "novoteste@teste.com";
     let newUserPassword = "123ABC";

     auth.setPersistence(firebase.auth.Auth.Persistence.NONE)
        .then(() => {
            auth.signInWithEmailAndPassword(newUserEmail, newUserPassword)
                .then(loggedUser => {
                    console.log(loggedUser)
                }).catch(error => {console.log(error)});
        })
}