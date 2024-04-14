function dobro(x) {
    console.log(x*2);
}

let dobro = function(x) {
    console.log(x*2)
}
/* PARTICULARIDADES
- O this não funciona em uma arrow function
- O bind também não funciona para ela.
*/


let dobro = x => {
    console.log(x*2);
}

let triplo = x => x*3; //Retorna automaticamente
