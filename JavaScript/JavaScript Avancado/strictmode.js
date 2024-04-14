var x = 1; //Essa variável será definida no escopo global, ou seja, ela pertence ao window
z = 2; //Automaticamente o JS atribui isso a uma "var"

function variavelLocal() {
    var local = 1;
    console.log(local); //Essa variavél será acessível apenas no escopo da função;
    localVar = 2; //Essa variável será acessível de forma global
}

// NOTA, quando usamos o:
"use strict";

// O comportamento de acessar uma variável que não tem o "var" antes não irá funcionar;