let numbers = ["Ola", "Mundo"];
// numbers.reduce((total, atual) => {
//     return total + atual;
// }, 0)

function soma (total, numAtual) {
    return total + numAtual;
}

function reduceSimulation(callback, initialValue) {
    var total = initialValue; //0
    console.log(this)
    for (let numAtual of this){ 
        total = callback(total, numAtual);
    }
    return total;
}

numbers.reduceSimulation = reduceSimulation;

console.log(numbers.reduceSimulation(soma, 0));
