const router = require('express').Router();
const todoRouter = require('./todo');
const UserController = require('../controllers/user-controller')

router.use('/todos', todoRouter);

router.post('/register', UserController.register);

router.post('/login', UserController.login);


module.exports = router;