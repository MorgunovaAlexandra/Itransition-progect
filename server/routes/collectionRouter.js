const Router=require('express');
const CollectionController=require('../controller/collectionController')
const router=new Router()


router.post('/',CollectionController.create)
router.get('/',CollectionController.getAll)
router.get('/:id',CollectionController.getOne)
router.post('/delete/:id',CollectionController.delete)


module.exports=router