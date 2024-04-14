# Integrando Mongo com o Node.js"

- Para integrar ele com o Node vamos utiliar um módulo chamado Mongoose. O Mongoose é um ORM (Object realational mapping)
    - Ou seja, nós vamos salvar os dados como se fossem objetos. Nós criamos uma instância do objeto e depois salvamos
    ele no MongoDB.
- Como instalar e fazer a conexão com o Banco de dados?
    - `npm i express mongoose`
    - ```javascript
        const mongoose = require('mongoose')
        mongoose.connect('mongodb://localhost/links');
      ```

# Criando documentos

- O Mongoose trabalha com ORM, então nós precisamos de um molde do que vai ser o nosso objeto la no no banco de dados. Esse molde é chamado de Schema no Mongoose.
- Para preparar um Scheema: 
    - ```javascript
        const linkSchema = new mongoose.Schema({
            title: {
                type: String, 
                required: true
            },
            description: String,
            url: {
                type: String, 
                required: true
            },
            click: {
                type: Number,
                default: 0
            }
        })


        const Link = mongoose.model('Link', linkSchema)

       
        let link =  new Link({
            title: "Programador BR",
            description: "Link para o Twitter",
            url: "https://twitter.com/progrbr"
        })

        link.save()
            .then(doc => console.log(doc))
            .catch(err => console.log(err));
      ```
    - O Schema é o jeito que vai ser o nosso documento
    - O model é a representação da nossa coleção

# Buscando documentos

- Para buscar um documento pelo Mongoose é bem simples: 
    - ```javascript
        const Link = mongoose.model('Link', linkSchema)

        Link.find({title}); //Semelhante aos métodos utilizados no terminal
        Link.findOne({title});
      ```

# Organizando pastas

- É ideal que o modelo fique em uma unica pasta
    - Crie uma pasta `models`
- Separar a rota
    - Crie uma pasta `routes`
- Separar a lógica de negócio
    - A rota ela é o controlador, e não deve fazer coisas além de exibir o que a rota implicitamente aparenta retornar. Sua função é fazer a ligação entre a requisição e o banco de dados
        - Crie uma pasta `controllers`


# Integrando com o Front-end

- `npm install ejs`

# Tratando o erro no Back-end

- Para tratar o erro no Back-end nós usamos o catch, e assim passamos um objeto para o index.ejs
através do `res.render`, para que o index seja capaz de exibir esse erro na tela

# Listando a tela dos links

- Nós conseguimos listar a tela dos links criando uma nova engine e passando para ela os links através da rota all

# Deletando links

- Nós conseguimos deletar links através de um botão que chama uma função aonde possui um fetch 
    - O FORM só manda GET e POST
    - O fetch manda get, post, put e delete

# Outras maneiras de deletar

- `npm install method-override`
- `router.use(methodOverride('_method'))`
- ```html 
    <form method="POST" action="/id?_method=DELETE> 
        <button type="submit">Delete</button>
    </form>

  ```
- Na rota delete, para atualizar a página
    - ```javascript
        res.redirect('/all');
    
    ```

#