let fs = require('fs'); //FS é um módulo do Node que permite a criação e alteração de arquivos 

fs.writeFile('test.txt', 'Hello World!', function(error) {
    if(error) {
        throw error
    };

    console.log("Arquivo criado com sucesso!")

})

fs.appendFile('test.txt', 'Texto novo!', function(error) {
    if(error) {
        throw error
    };

    console.log("Arquivo criado com sucesso!")
})

fs.unlink('test.txt', function(error) { 
    if(error) {
        throw error;
    } 

    console.log("Arquivo apagado com sucesso!")
})

fs.readFile("Test.txt", 'UTF8', function(error, data) {
    if(error) {
        throw error;
    } 
    console.log(data);
});


//==============EXERCICIO================//
let args = process.argv.slice(2);
let fileName = args[0];
fs.readFile(fileName, "UTF8", (error, data) => {
    if (error) {
        throw error;
    }

    fs.writeFile(fileName + "_Uppercase", data.toUppercase(), (error) => {
        if (error) throw error;

        console.log("Arquivo gerado com sucesso")
    })
})