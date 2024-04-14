let usuarios = ["Adriano", "Marica", "Jose"];

function inserirUsuario(nome){

    const promise = new Promise(function(resolve, reject) {

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

        return promise;
    }); //É um objeto que recebe uma função como argumento

}

inserirUsuario("Igor")
    .then(listarUsuarios)
    .catch(error => {
        console.log(error.msg)
    });

// Fetch API
const userName = 'Henrriky';
fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    }
}).then((response) => {
    console.log(typeof response)
    console.log(response);
    return response.json()
}).then((data) => {
    console.log(data.name);
})