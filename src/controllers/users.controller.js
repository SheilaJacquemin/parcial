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

//EDITAR UN USUARIO
controller.putUser = async (req,res)=>{
    try {
        const idUser = req.params.idUser;
        const {username,password} = req.body;
        if(!idUser || !password || !username) {
            return res.json({
                msg: 'No se encuentra id o información en la petición.',
        })
        }
        const newPassword = bcrypt.hashSync(password,10)
        await User.updateOne({password:newPassword , username});
        return res.json({
            message: `Usuario modificado correctamente.`
        })
    } catch (error) {
        return res.json({
            msg: 'Error al modificar'
        })
    }
};

//ELIMINAR UN USUARIO 
controller.deleteUser = async (req,res)=>{
    try {
        const idUser = req.params.idUser;
        if(!idUser) {
            return res.json({
                msg: 'No se encuentra id',
        })
        } return res.json({
            msg: 'Usuario eliminado correctamente'
        })
    } catch (error) {
        return res.json({
            msg: 'Error al eliminar el usuario'
        })
    }
}


module.exports = controller;