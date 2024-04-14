const jwt = require('jsonwebtoken')
// const user = {
//     id: 20,
//     name: "Joao",
//     username: "joao@gmail.com",
//     password: "1234567"
// }

const secret = 'asdkaskdpaksdpasd'
const token = jwt.sign({ id: user.id, username: user.username}, secret, {expiresIn: 20})

console.log(token)

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsInVzZXJuYW1lIjoiam9hb0BnbWFpbC5jb20iLCJpYXQiOjE2ODA2Mzc0MjZ9.R7P5sp68GNV_3hYSo1PdocaFYJLf6KJyJDuoYFp04jc"
// const validData = jwt.verify(token, secret)

console.log(validData)