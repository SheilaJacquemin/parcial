const User = require("../models/users.model")

const controller = {}

//OBTENER LISTADO DE USUARIOS
controller.getUsers = async (req,res)=>{
    try {
        const user = await User.find()
        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'Error en la obtención de usuarios'
        })
    }
}


//CREAR UN NUEVO USUARIO
controller.postUser = async (req,res)=>{
    try {
        const {username, password, email} = req.body;
        //INSTANCIAR UN NUEVO USUARIO
        const newUser = new User({
            username,
            password,
            email
        });
        // GUARDAR USUARIO EN LA BASE DE DATOS
        const user = await newUser.save();
        return res.status(200).json({
            msg: 'Usuario creado exitosamente :)'
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'Error al crear el usuario'
        })
    }
};



module.exports = controller;