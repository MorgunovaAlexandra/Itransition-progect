//const { require } = require('auth');
//const { require } = require('auth');
const Router=require('express');
const TypeController=require('../controller/typeController')
const cheskroleMidleWare=require('../midlewire/checkRoleMiddleware')
const router=new Router()


router.post('/',TypeController.create)
router.get('/',TypeController.getAll)
router.post("/delete/:id",TypeController.delete)


module.exports=router