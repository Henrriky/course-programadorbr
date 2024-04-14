# O que é?

- O MongoDB é um sistema de gerenciamento de banco de dados, onde poderá ser utilizado em conjunto com o Node.js para 
armazenar dados. Esse SGDB utiliza o NoSQL, ou seja, ele vai usar documentos e colações.
- O MongoDB é bom porque sua utilização com o Node.js possibilita a alteração do SGDB sem muitas dificuldades.
- A aplicação do MongoDB é dividida em duas partes:
    - Principal: Guarda dados, buscar dados, criar coleções. Essa parte roda em background, e por isso se chama serviço. Nós não conseguimos ver essa parte da aplicação, mas nós precisamos interagir com essa parte.
        - Essa interação pode ser visual ou pode ser pelo shell(terminal). Para isso nós precisamos conectar o shell ao nosso serviço do mongoDB.
        - O terceiro tipo de interação com o Banco é através do Node.js.
- Para iniciar o mongo no terminal
    - `mongosh` Shell do MongoDB
        - Após isso, só digitar os códigos mongo

# Comandos

- Mostrar todos bancos `show dbs`
- Mostrar o banco que nós estamos `db`
- Criar uma coleção `db.createCollection('someCollection')`
- Apagar banco ` db.dropDatabase()`
- Mudar banco `use local` 
- Criar um banco de dados
    - `use blog`
    - `db.createCollection('someCollection')`
- Apagar coleção `db.users.drop()`
- Mostrar coleções `show collections`

# Criando documentos nas coleções

- Inserir um documento dentro de uma coleção 
    - `db.users.insertOne({name: "Igor", password: "1234", email: "contato@programadorbr.com"})`
- Inserir mais de um documento 
    - `db.users.insertMany([{name: "José"}, {name: "Marcela"}, {name: "Jonas}])`

# Selecionando documentos

- Pegar todos os documentos da coleção users
    - `db.users.find()`
- Pegar apenas um documento (primeiro da coleção) `db.users.findOne()`
- Pegar dois documentos da coleção `db.users.find().limit(2)`
- Pegar dois documentos da coleção de forma identada `db.users.find().limit(2).pretty()`. O pretty também serve para outros métodos
- Pegar documentos com especificidade
    - `db.users.find({name: "José})`
    - `db.users.find({type: "Admin})`
    - `db.users.find({type: "Admin})` Conta a quantidade de documentos que atendem aquela condição
- Pegar documentos de defierentes formas
    - `db.users.find().sort({name: 1}).pretty()` Do maior para o menor (Alfabeto)
    - `db.users.find().sort({name: -1}).pretty()` Do menor para o menor

# Atualizando documentos

- Atualizar um documento especifico adicionando um novo campo
    - `db.users.updateOne({name: "Marcela"}, {$set: {tel: "3333444"}})`
- Atualizar vários documentos
    - `db.users.updateMany({}, {$set: {class: "2001"}})`
- Remover um atributo
    - `db.users.updateMany({}, {$unset: {class: "}})`
- Atualizar um documento inteiro
    - `db.users.update({name: "Igor"}, {$set: {name: "Igor", password: "33233"}})`
- Atualizar se existir e criar se não existir
    - `db.users.update({name: "Henrriky"}, {$set: {name: "Henrriky", password: "33233"}}, {upsert: true})`
    - `db.links.findOneAndDelete({_id: ObjectId("6429e0bcda4547a1ca070f03")})`

# Mais um pouco sobre update

- Adicionado campo visita para todos documentos`db.users.updateMany({}, {$set: {visits: 0}})`
- Atualizando nome dos campos para todos documentos
    - `db.users.update({}, {$rename: {visits: "views"}})`
- Incrementar o valor de um campo para um documento especifico
    - `db.users.updateOne({name: "Jonas"}, {$inc: {views: 1}})`

# Integrando com o Front-end

- `npm install `