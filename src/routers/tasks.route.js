const { getTasks, getTasksByUser, postTask } = require('../controllers/tasks.controller');

const router = require('express').Router();
const validarJWT = require("../middlewares/validarJWT")

router.get('/tasks', validarJWT, getTasks);
router.get('/tasks/:userId', validarJWT, getTasksByUser);
router.post('/tasks', validarJWT, postTask);


module.exports = router;