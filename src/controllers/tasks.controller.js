const Task = require("../models/tasks.model")

const controller = {}

//OBTENER LISTADO DE TAREAS
controller.getTasks = async (req,res)=>{
    try {
        const tasks = await Task.find()
        return res.json(tasks)
    } catch (error) {
        console.log(error)
        return res.json({
            msg: 'Error en la obtención de tareas'
        })
    }
}

//OBTENER LISTADO DE TAREAS POR USUARIO
controller.getTasksByUser = async (req,res)=>{
    try {
        const id = req.params.userId;
        console.log(req.params)
        const tasks = await Task.find({userId:id})
        return res.json(tasks)
    } catch (error) {
        console.log(error)
        return res.json({
            msg: 'Error en la obtención de tareas'
        })
    }
}

//CREAR UNA NUEVA TAREA
controller.postTask = async (req,res)=>{
    try {
        const {title, description, userId} = req.body;
        //INSTANCIAR UNA NUEVA TAREA
        const newTask = new Task({
            title,
            description,
            userId
        });
        // GUARDAR TAREA EN LA BASE DE DATOS
        const task = await newTask.save();
        return res.status(200).json({
            msg: 'Tarea creada exitosamente :)',
            task
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'Error al crear la tarea'
        })
    }
};

//EDITAR TAREA
controller.putTasks = async (req,res)=>{
    const idTask = req.params["idTask"]
    try {
        const {title, description} = req.body
        const TaskAct = {
            title,
            description

        }
        const newTask = await Task.findByIdAndUpdate(idTask,TaskAct)
        return res.json({
            msg:"Tarea Actualizada",
            newTask
        }
            
        )
    } catch (error) {
        return res.json({
            msg: 'No se pudo actualizar la tarea'
        })
    }
};

//ELIMINAR LA TAREA
controller.deleteTasks = async (req,res)=>{
    try {
        const idTask = req.params["idTask"]
        Task.findByIdAndDelete(idTask).exec()
        return res.json({
            msg:"Tarea eliminada con éxito",
        })
    }
    catch (error) {
        return res.json({
            msg: 'No se pudo eliminar la tarea'
        })
    }
}

module.exports = controller;