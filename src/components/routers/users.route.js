const { getUsers,postUser } = require('../controllers/users.controller');

const router = require('express').Router();

router.get('/users', getUsers);
router.post('/users',postUser);


module.exports = router;