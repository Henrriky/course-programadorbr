# O que é o NodeJS

- É uma tecnologia para executar o JavaScript no computador.
- Para executar um código JS com node é necessário ir até a pasta e abrir um terminal
- `node script.js`

# JS Node X JS Browser

- É o mesmo Javascript, mas nós não temos acesso as mesmas funcionalidades. 
- Exemplo:
    - Objeto window do JS Browser

# Argumentos do Node

- É possível passar argumentos para o node pelo terminal
    - `node script.js 50 30`

# Módulos

- Podemos separar nosso códigos criando módulos no node
- Para isso devemos colocar a sintaxe: 
    ```Javascript
    module.exports = function soma (a, b) {
        return a + b;
    }
    ```
- Existem três tipos de modulos
    - Criado por pessoas
    - Fornecido pelo Node.js
    - Criado por você mesmo

# Pacotes 

- Comando inicial `npm init`
    - Entrypoint: Arquivo principal
    - Com isso ele vai criar o arquivo `package.json`, onde está todas as informações dos pacotes do projeto.
    - Pronto, acabamos de criar um pacote.
- Após instalar algum pacote, mesmo que a pasta node_modules seja apagada, isso não irá afetar o programa, pois todas as
informações das dependências estão no package.json. `npm i`

# Imagem exercicio

- Quando instalamos o pacote `npm install compress-images --save-dev` criamos uma chave de devDependencies
    - Dependencias de desenvolvimento são pacotes que são usados apenas em produção e não no deploy do projeto