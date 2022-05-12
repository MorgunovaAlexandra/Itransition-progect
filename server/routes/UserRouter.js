//const { require } = require('auth');
const { request } = require('express');
const Router=require('express');
const authMidleWare=require('../midlewire/authMidleware')
const router=new Router()
const UserController=require('../controller/userController')

router.post('/registration',UserController.registration),
router.post('/login', UserController.login)
router.get('/auth',authMidleWare, UserController.chesk)
router.get('/users',UserController.getAll)
router.post('/delete/:id',UserController.delete)
router.post('/users/:id',UserController.changeRole)
module.exports=router