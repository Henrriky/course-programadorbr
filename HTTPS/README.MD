# O que é?

- SSL (Secure Sockets Layer)
    - É o cadeado que tem no nosso site (http**s**)
    - Quando estamos tratando de dados sensíveis é necessário fazer alguma coisa coisa para tentar garantir a segurança desses dados. A primeira coisa que a gente fez foi criptografar a senha no banco de dados. Entretanto, ainda possui um problema de segurança nessa abordagem
        - Esse problema é o momento de conexão entre o navegador do usuário e o back-end. Isso porque se alguem conseguir interceptar essa conexão ele vai conseguir ter acesso aos dados do usuário. 
        - Para resolver isso nós utilizamos o SSL, que é uma camada de segurança que vai fazer com que essa conexão seja feita de forma segura. A grosso modo, o back-end gera uma chave privada e uma chave pública.
            - Quando uma requisição é feita para o back-end ele manda junto com a resposta essa chave pública. Com essa chave pública, todos os dados que forem enviados pelo navegador vão ser criptografados baseado nessa chave. Essas chaves são válidadas por certificadores digitais, que tem a função de dizer se a chave é segura ou não.

# Instalando o certificado

- Nesse caso vamos utilizar a [Umbler](https://app.umbler.com/home) para gerar esse certificado com o Let's Encrypt
- Hospedar site --> Configurações --> SSL --> Habilitar o certificado Let's Encrypt

# Redirecionando http para https

- ```javascript 
    app.use("*", (req, res, next) => {
        if (req.headers['x-forwarded-proto'] == "https") {
            next()
        } else {
            res.redirect("https://" + req.headers.host + req.originalUrl)
        }
    })


    app.get('/teste', (req, res) => {
        res.send("Teste do HTTPS")
    })
  ```