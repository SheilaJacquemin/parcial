const { getUsers,postUser,putUser,deleteUser } = require('../controllers/users.controller');

const router = require('express').Router();
const validarJWT = require("../middlewares/validarJWT")

router.get('/users', getUsers);
router.post('/users',postUser);
router.put('/users/:id',validarJWT, putUser);
router.delete('/users/:id',validarJWT, deleteUser)

module.exports = router;