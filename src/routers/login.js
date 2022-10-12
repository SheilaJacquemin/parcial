const { iniciarSesion } = require('../controllers/login.controller');

const router = require('express').Router();

router.post('/login', iniciarSesion )


module.exports = router;