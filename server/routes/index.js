const Router=require('express');
const router=new Router()
const UserRouter=require('./UserRouter');
const collectionRouter=require('./collectionRouter');

const typeRouter=require('./typeRouter');
const { route } = require('express/lib/application');


router.use('/user',UserRouter)
router.use('/type',typeRouter)
router.use('/collection',collectionRouter)



module.exports=router 