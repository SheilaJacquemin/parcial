const router = require('express').Router();
const {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
} = require('../controllers/user.controller');
const { route } = require('./home.routes');