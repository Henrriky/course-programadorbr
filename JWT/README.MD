# Configurações iniciais 

- Colocar variáveis de ambiente `npm install dotenv` 
- `npm install express`
- Permite que inicie a aplicação por `npm start`
- ```javascript 
    "scripts": {
    "start": "node app.js"
  },
  ``` 

# Estrutura da pasta

- Controllers -> Métodos que são executados de acordo com a rota, e se conectam com o banco de dados
- Routes -> Preparação das rotas, com a ausência da lógica de negócio, pois isso é responsábilidade do Controller
- Models -> Toda a lógica do banco de dados/preparação da classe ou objeto para o ORM

# Preparando o Banco de Dados

- `npm i mongoose`
- Vamos utilizar o Atlas para hospedar nosso banco de dados
    - Para isso temos que pegar as informações de conexão la no atlas

# Criando usuario

- NOME - EMAIL - PASSWORD - DATA
- Criar um modelo do nosso usuário

# Registrando o usuário

# Criptografando senhas 

- BeCript `npm i bcryptjs`
- Como usar?
    - ```javascript
        const password = "Meu Password";
        const salt = bcrypt.genSaltSync(14);

        const cryptPassword = bcrypt.hashSync(password, salt);
        console.log(cryptPassword) //$2a$14$pFifU0RQZtNAsJpfnu/jL.bQ7zNTaNjV/Qb7TfKTN/Hzz8u8S7nDK
      ```
    - A função recebe uma string e um salt
        - O Salt é um número que é utilizado no algoritmo de criptografia para garantir que a string gerada não vai ser igual mesmo que a gente utilize a mesma string
        - Cada vez que nós executamos o código a hash é diferente
    - Como a gente garante que a criptografia é a mesma string que a gente definiu?
    - Para checar o password
        ```javascript 
            const password = "Meu Password";
            const dbSavedPassword = "$2a$14$pFifU0RQZtNAsJpfnu/jL.bQ7zNTaNjV/Qb7TfKTN/Hzz8u8S7nDK";
            console.log(bcrypt.compareSync(password, dbSavedPassword))
        ```

# Login com o usuário

- Precisamos se o email existe e se a senha de usuário bate com o que está no banco de dados
- ```javascript
    const selectedUser = await User.findOne({email: req.body.email});
    if(!selectedUser) return res.status(400).send("Email or Password is incorrect");

    const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password)
    if(!passwordAndUserMatch) return res.status(400).send("Email or Password is incorrect");

    res.send("User Logged");
  ```
- O usuário não tem que ficar mandando o usuário e a senha a todo momento para API, pois isso não é uma boa opção. Para isso vamos utilizar o JWT

# JWT

- Na requisição o usuário manda o email + password. Nós realizamos essa checagem para ver se o usuário existe e se bate com o password o usuário pode acessar as coisas. No modelo de API Rest nós não armazenamos nenhum dado do usuário no Back-end. Toda vez que o usuário quiser acessar o back-end ele precisa enviar as credenciais dele
- Essas credenciais é algo que identifique ele, porém ele não pode ficar mandando toda hora elas.Para resolver isso nós
vamos criar um TOKEN. 
- Como funciona?
    - Quando o usuário é logado, nós criamos um TOKEN que vai conter um dado e vai gerar uma string.
    - Essa string gerada é única. E ela é baseada em um dado + uma palavra chave, essa palavra chave apenas o Back-end conhece.
    - Depois que esse token é gerado ele é enviado para o front-end, lá nesse front-end ele vai armazenar isso em algum localStorage, e toda nova requisição o Token é enviado
    - [Site Oficial](https://jwt.io/)
    - O token do JWT valida se aquela assinatura é valida
    - Caso a chave secreta seja diferente o token será inválido
- E no código?
    - `npm i jsonwebtoken`
    - Criar um token com chave secreta
        - ```javascript
          const jwt = require('jsonwebtoken')
          const user = {
              id: 20,
              name: "Joao",
              username: "joao@gmail.com",
              password: "1234567"
          }
          const secret = 'asdkaskdpaksdpasd'
          const token = jwt.sign({ id: user.id, username: user.username}, secret)
          console.log(token)
          ```
    - Validar token
        - ```javascript
          const jwt = require('jsonwebtoken')
          const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsInVzZXJuYW1lIjoiam9hb0BnbWFpbC5jb20iLCJpYXQiOjE2ODA2Mzc0MjZ9.R7P5sp68GNV_3hYSo1PdocaFYJLf6KJyJDuoYFp04jc"
          const secret = 'asdkaskdpaksdpasd'

          const validData = jwt.verify(token, secret)
          console.log(validData)
          ```
    - Tornar o token expirável para que evite invasões nos dados do usuário
        - ```javascript
            const token = jwt.sign({ id: user.id, username: user.username}, secret, {expiresIn: 20})
          ```
- Fluxo
    - Criamos o token com a chave secreta no back-end
    - O usuário envia somente o token, que será válidado no back-end junto com a chave secreta

# Validando a entrada

- As vezes a lógica de validação deve passar pelo back-end antes de ir para o banco de dados
- `npm i @hapi/joi`
    - Criar a validação:
    ```javascript
    const Joi = require('@hapi/joi');

    const registerValidate = (data) => {
    
    const schema =  Joi.object({
        name: Joi.string().required().min(3).max(50),
        email: Joi.string().required().min(3).max(50),
        password: Joi.string().required().min(6).max(100)
    }) 
    return schema.validate(data)
    }

    const { error } = registerValidate(req.body);
    if(error) return res.status(400).send(error.message)
    ```