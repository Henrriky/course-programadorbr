const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { loginValidate, registerValidate } = require('./validate');
//Do ponto de vista de arquitetura, a função de criptografar uma senha deveria estar desacoplada do controlller
//Além disso, a função controller deveria depender de uma interface que chamaria o banco de dados e que teria os métodos login e register



const register = async (req, res) => {

    const { error } = registerValidate(req.body);
    if(error) return res.status(400).send(error.message)


    const selectedUser = await User.findOne({email: req.body.email});
    if(selectedUser) return res.status(400).send("Email already registered");

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    })

    try {
        const savedUser = await user.save(); 
        res.send(savedUser)
    } catch (error) {
        res.status(400).send(error)
    }
}

const login = async (req, res) => {

    const { error } = loginValidate(req.body);
    if(error) return res.status(400).send(error.message)

    const selectedUser = await User.findOne({email: req.body.email});
    if(!selectedUser) return res.status(400).send("Email or Password is incorrect");

    const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password)
    if(!passwordAndUserMatch) return res.status(400).send("Email or Password is incorrect");

    const token = jwt.sign({_id: selectedUser._id, admin: selectedUser.admin}, process.env.TOKEN_SECRET)
    res.header('authorization-token', token)
    res.send("User Logged");
}




module.exports = { register, login }




























//Primeira opção

// const userController = {
//     register: (req, res) => {
//         console.log('Register')
//         res.send('Register')
//     },
//     login: (req, res) => {
//         console.log('Login')
//         res.send('Login')
//     }
// }

// module.exports = userController;