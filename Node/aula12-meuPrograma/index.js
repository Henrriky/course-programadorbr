/*
- Para importar o pacote das funções fazemos o seguinte.
    - Como são projetos diferentes não podemos utilizar o require, e sim instalar o nosso pacote
    - Para instalar o pacote devemos executar alguns comandos no terminal da pasta:
        * npm install "N:\NossoBB\Documents\ESTUDO\ProgramadorBR\Node\aula12-packages"
        * Após esse comando ele modifica o arquivo package.json com um objeto dependencias, onde está especificado os
          pacotes do projeto. Além disso, também foi criado uma pasta node_modules e o package-lock.json, que contém as 
          informações dos pacotes.
        *
*/
let calc = require('matematica');

console.log(calc.area_quadrado(2, 3));