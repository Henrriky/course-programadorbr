function speakGeneric () {
    console.log(this.sound);
}

//CACHORRO
let dog = {
    sound: "Au au",
    speak: speakGeneric
}
dog.speak(); //Auau

//GATO
let cat = {
    sound: "Miau",
    speak: speakGeneric
}
cat.speak(); //Miau


let bindedFunction = speakGeneric.bind(dog); //O método bind de todas as funções, serve para criar um contexto de quem é o this.
bindedFunction();