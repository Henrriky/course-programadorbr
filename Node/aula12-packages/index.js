/*
- Um pacote nada mais é do que um conjunto de um ou mais módulos. Esses pacotes podem ser utilizados por diversas pessoas
- Como que usamos esses pacotes?
    - Assim que o Node.js é instalado ele vem acoplado o NPM, que é um gerenciador de pacotes
*/

const operacoesBasicas = require('./operacoesBasicas');
const areas = require('./areas');

module.exports = { ...operacoesBasicas, ...areas}