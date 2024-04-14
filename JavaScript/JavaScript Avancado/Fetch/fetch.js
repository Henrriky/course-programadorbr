let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"


async function converter(){
    let input = document.getElementById("valor");
    let valor = input.value;

    // fetch(url)
    // .then((response) => {
    //     return response.json();
    // })
    // .then(data => {
    //     let rate = data.rates.BRL;
    //     document.getElementById("resultado").innerText = data.value * rate;
    // })
    await valorEmDolar(valor)
        .then((data) => { 
            document.getElementById("resultado").innerText = data.value;
        }    
        ).catch((error) => {
            console.log(error.msg)
        })

}



function valorEmDolar(valor) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if (!error) {
                resolve({value: valor * 4});
            } else {
                reject({
                    msg: "Erro desconhecido"
                })
            }
        }, 1000)
    })

    return promise;
}