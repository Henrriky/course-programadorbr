// Carne -  400gr por pessoa + 6 horas - 650
// Cerveja - 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa + 6 horas - 1500ml

//Crianças valem por 0,5]

let inputAdultos  =  document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao  =  document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando");
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao)/2 * criancas);
    let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos + (cervejaPorPessoa(duracao)/2 * criancas);
    let qtdTotalBebida = bebidaPorPessoa(duracao) * adultos + (bebidaPorPessoa(duracao)/2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne/1000} KG de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida/2000)} Garrafas(2L) de Bebida</p>`

}

function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    };
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    };
}
function bebidaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    };
}