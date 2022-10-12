const User = require("../models/users.model")

const token = require("../helpers/generator_jwt.js")
const bcrypt = require("bcrypt")
const controller = {}

//OBTENER LISTADO DE USUARIOS
controller.getUsers = async (req,res)=>{
    try {
        const user = await User.find()
        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.json({
            msg: 'Error en la obtención de usuarios'
        })
    }
}


//CREAR UN NUEVO USUARIO
controller.postUser = async (req,res)=>{
    try {
        const {username, password:passwordRecibida, email} = req.body;
        //INSTANCIAR UN NUEVO USUARIO
        const newPassword = bcrypt.hashSync(passwordRecibida,10)
        const newUser = new User({
            username,
            password:newPassword,
            email
        });
        // GUARDAR USUARIO EN LA BASE DE DATOS
        const user = await newUser.save();
        return res.json({
            msg: 'Usuario creado exitosamente :)', 
            user
        })
    } catch (error) {
        console.log(error)
        return res.json({
            msg: 'Error al crear el usuario'
        })
    }
};



module.exports = controller;