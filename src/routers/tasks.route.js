const { getTasks, getTasksByUser, postTask, putTasks, deleteTasks} = require('../controllers/tasks.controller');

const router = require('express').Router();
const validarJWT = require("../middlewares/validarJWT")

router.get('/tasks', validarJWT, getTasks);
router.get('/tasks/:userId', validarJWT, getTasksByUser);
router.post('/tasks', validarJWT, postTask);
router.put('/tasks/:idTask', validarJWT, putTasks);
router.delete('/tasks/:idTask', validarJWT, deleteTasks)

module.exports = router;