# Como o React funciona?

- [Documentação](https://legacy.reactjs.org/docs/getting-started.html)
- O React é uma tecnologia que permite a criação de SPA(Single Page Apps).

# Usando React pela primeira vez

- No React Raíz nós devemos criar uma div com id root, que será responsável por receber os elementos inseridos pelo JS. Ou seja, todo o gerenciamento de elementos vai ser feito através de React, e ele precisa de um lugar para colocar esses elementos, que será a `<div id="root">`
- Também devemos criar um script que referencia um arquivo js `<script src="index.js"></script>`
    - Para poder utilizar o React no arquivo JS devemos importar ele em uma tag script antes do index.js importado
    ```html
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    ```
- Para criar um elemento react devemos fazer da seguinte forma:
    - ```javascript
        const root = document.querySelectorAll("#root");
        const element = React.createElement("h1", {id: "Título principal"}, "Hello World");
      ```
    - Quando vamos criar um elemento em react a função createElement recebe três parâmetros
        - Primeiro --> Uma tag (ex: h1, h2)
        - Segunda --> Parâmetros ou atributos ( { id: "h1})
        - Terceiro --> Conteúdo que vai dentro da tag, podendo ser outros elementos ou apenas um texto
- Para colocar esses elementos na tela nos utilizamos o ReactDOM
    - ```javascript
        const root = document.querySelector("#root");
        const element = React.createElement("h1", {id: "Título principal"}, "Hello World");
        ReactDOM.render(element, root)
      ```
    - Quando chamamos a função render() ela recebe dois parâmetros: o elemento e a tag aonde eu quero renderizar

# JSX 

- É uma maneira de escrever Javascript semelhante a HTML
- No JSX nós escrevemos "HTML" no DOM.render(aqui), porém para esse código funcionar, devemos instalar o Babel 
    - O Babel é uma ferramenta para ele transformar o código javascript que criou em uma determinada versão para uma versão que é compatível com todos os navegadores, ou seja, a versão ES5.
    - [DOCS](https://babeljs.io/docs/babel-standalone)
    - `<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>`
    - Porém nós ainda precisamos dizer para o navegador que a tag `<script>` é do tipo text/babel
    - Então no fim, o que o Babel faz é transformar nosso código JSX, que está em "HTML" para um código aonde utiliza-se o React raíz, que implementa a função React.createElement("div", null, element1, element2)
    - No caso do segundo exemplo do nosso código é a forma que o React funciona. Nós criamos componentes como se fossem funções, e quando chamamos esse componente por debaixo dos panos ele transforma o código JSX em React.createElement e executa a função, colocando o elemento retornado dentro de um ReactDOM.render()

# Create React App

- Há uma forma de nós iniciarmos um projeto react sem precisar ficar importando o babel, react e react dom. Para fazer isso nós utilizamos o gerenciador de pacote `npx`
    - **Nota!**
        - Podemos iniciar um projeto react com o Vite também, que é uma ferramenta que você pode gerar a estrutura de código de vários frameworks
        - `npm create vite@latest`
    - `npx create-react-app my-app`
- Após essa instalação nós teremos a criação de várias pastas e arquivos
    - No arquivo `package.json` temos alguns scripts que fazem determinadas coisas:
        - `npm start` -> Inicia a aplicação
        - `npm build`
        - `npm test`
        - `npm eject`
- Nosso projeto sempre começa no arquivo index.html dentro da pasta `public`
- É no arquivo `index.js` aonde nossos arquivos jsx ou js serão renderizados com o ReactDOM.render();
- Normalmente nós utilizariamos o `require('react)` para importar os módulos ou pacotes, que é a forma de importar módulos no ES5. Porém, o ES6 permite a importação através da nomenclatura `import`, caso nós desejassemos utilizar o import no navegadores seria necessário importar o babel, para converter esse código em ES5.
- No código `index.js` o ReactDOM renderiza nosso JSX `App.js`, que retorna um código JSX.
    - **Nota!**
        - Na versão atual do ES6 a forma de exportação de módulos passou de `module.exports = App` para `export default App`
    - Importante frizar também que no arquivo `App.js` há a importação do `React` que está sendo utilizado por debaixo dos panos pelo Babel
    - No JSX nós utilizamos `className` ao invés de `class` para definir uma classe para uma tag, pois no JavaScript class significa um objeto, e geraria um conflito de palavras reservadas do JS.

# Build

- Para colocar esses projetos em React no ar ocorre o processo de Build. Claro que podemos colocar direto do node e dar um `npm start`, mas dessa forma o seu projeto estará rodando em ambiente de desenvolvimento, e terá sua otimização prejudicada.
- Para subir isso para produção é necessário rodar o comando:
    - `npm run build` --> Quando rodamos esse comando alguns caminhos estão com a ausência de `./` e por isso a aplicação não pode funcionar muito bem
        - Para resolver esse problema nós vamos no arquivo package.json e vamos colocar o atributo `"homepage": "."`

# Componentes e propriedades

- O componente em si é a Função javascript que retorna um JSX e exporta ela
- Para importar um componente pega-se o nome dele e a pasta na qual ele está localizando, e quando for utilizá-lo, é só criar uma estrutura de tag HTML com o nome do componente importado.
- Para colocar propriedades nos componentes é necessário passar um parâmetro para a função que faz o componente, que será o `props`, e quando importar o componente, as propriedades serão os **atributos** do componente

# Listas

- Quando trabalhamos com propriedades passadas dinâmicamente é mais interessante nós utilizarmos a função map do que fazer isso na mão
- No momento a gente consegue passar valores do pai para o filho mas não conseguimos passar valores do filho do pai

# Criando objetos com classes

# Componentes com class

- Uma das coisas mais importantes do React junto com as propriedades são os estados. A diferença é que o estado vai mudar depois que a página já foi carregada, as propriedades não.
    - As propriedades são as configurações iniciais de um componente, enquanto um estado é como ele está naquele momento. Pode ser que esse ele mude.
        - EX: Se a gente vai carregar um elemento que ele nasce com o background verde, isso vai ser passado pela propriedade.
        - Ex: Mas se a gente quer q em algum momento a gente clique no botão e ele mude o background pra azul ai a gente precisa de um estado. Pois sempre que alguma coisa for mudar é o estado que vai mudar.

# Estados

- O counter não é alterado por que uma vez que a tela foi carregada ela não está sendo recarregada. É ai que entra o estado
- O estado é um tipo de variável especial no React que toda vez que ela é atualizada, se ela tiver sendo utilizada na tela ele vai renderizar novamente o elemento.
- Para criar um estado precisamos definir no corpo do construtor `this.state = { count: 1 }`. E agora quando clicar no add eu vou atualizar o meu estado
    - **Nota!**: Não podemos alterar um estado diretamente, por exemplo: `this.state.count += 1`
    - Sempre que formos atualizar um estado a gente precisar utilizar o `setState()`
    - Agora toda vez que o estado é modificado o próprio react vai fazer a atualização da tela
    - Ou seja, toda lógica de manipulação da tela dentro do React sendo feita por algum input do usuário, vai ser feita através da alteração do estado daquele componente.
    - Nós podemos transformar propriedades em estado, utilizando o `this.state = { count = this.props.propriedade }`
    - Forma correta de atualizar estado `this.setState((state) => { return {count: state.count + 1}})`

# Ciclo de vida do componente

- O primeiro ciclo de vida é `construtor`, ou seja, sempre que a gente cria um novo componente a primeira coisa que nosso objeto vai fazer é criar esse construtor, e ai ele vai executar tudo que tiver no corpo do construtor.
- Outro método é o `render()`, e ele vai ser executado toda vez que ocorrer alguma alteração no componente. Normalmente é alteração do estado ou das propriedades.
- Outro método é o `shouldComponentUpdate()`, que se traduz "Deveria o componente se atualizar?". Ele retorna um valor booleano. E se for false ele não irá atualizar a tela, mas vai atualizar o estado
- Outro método é o `componentDidMount()`, que só é executado quando um componente é carregado na tela. Ele serve para a gente puxar um valor somente após o componente for carregado
    - Se você tem algum dado que você precisa fazer um fetch para um back-end e esperar o retorno para colocar no seu componente, isso não será feito no construtor, isso será feito no componentDidMount()
- `componentWillUnmount()`, será executado sempre que um componente for removido da tela, como por exemplo remover um item da tela de todo list
- *1 Método do ciclo de vida de um componente:* Construtor

# Hooks estados

- Como na versão atual do React nós utilizamos funções, nós não temos acesso as funções de ciclo de vida de um componente criado com Class. Foi por causa disso que surgiram os Hooks, que nada mais são do que uma função global para a gente criar estados.
- Ou seja, para criar um estado com a semântica da função precisamos fazer o seguinte:
    ```javascript
        const [count, setCount] = useState(props.count);
    ```

# Use Effect

- É o Hook de ciclo de vida de um componente
- `componentDidUpdate()` Executa uma função se o componente for atualizado
- O useEffect é chamado em duas ocasiões
    - Quando o componente for criado, equivalente ao `componentDidMount()`
    - Quando o componente for atualizado, equivalente ao `componentDidUpdate()`
    ```javascript
        //Executa toda vez que o estado count mudar
        useEffect(() => {
            document.title = count;
            localStorage.setItem("count", count)
        }, [count])

        //Executa apenas uma vez
        useEffect(() => {
            document.title = count;
            localStorage.setItem("count", count)
        }, [])

        //Executado toda vez quando qualquer estado que for atualizado
        useEffect(() => {
            document.title = count;
            localStorage.setItem("count", count)
        })

        //componentWillUnmount() --> Executa quando componente é removido
        
        useEffect(() => {
            setCount(parseInt(localStorage.getItem("count")));

            //Essa função só executa quando o componente for destruído
            return () => {
                console.log("Não tem mais contador");
            }
        }, [])
    ```

# Falando sobre import

- Caso a gente exporte algo com o `default` nós não precisamos usar as chaves na importação e podemos dar o nome que quiser
- Somente um pode ser exportado como default
- Quando for importado algo que não é default é necessário usar o `{}`