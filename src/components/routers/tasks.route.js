const { getTasks, getTasksByUser, postTask } = require('../controllers/tasks.controller');

const router = require('express').Router();

router.get('/tasks', getTasks);
router.get('/tasks/:userId', getTasksByUser);
router.post('/tasks', postTask);


module.exports = router;