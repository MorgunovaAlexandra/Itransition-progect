//const { require } = require('auth')
const uuid=require('uuid')
const path=require('path')
const {Collections, DeviceInfo}=require('../models/models')
const ApiError=require('../errorApi/ApiError')
const { Collection } = require('mongoose')
const{User}=require('mongoose')
class CollectionController{
    async create(req,res,next){
      try{
      let {name,typeId,email,info}=req.body
      let {img}=req.files
      let fileName=uuid.v4()+'.jpg'
      img.mv(path.resolve(__dirname,'..','static',fileName))
      const collection=await Collections.create({name,typeId,img:fileName,email})
      if(info){
        info=JSON.parse(info),
        info.forEach(i => 
          DeviceInfo.create({
            title:i.title,
            description:i.description,
            collectionId:collection.id
          })
        );
      }
      return res.json(collection)
         }
      catch(e){
        next(ApiError.badRequest(e.massage))
      }
    }
    async getAll(req,res){
      const {typeId}=req.query
     
      let collection
      if(!typeId){
       collection=await Collections.findAll()
      }
      if(typeId){
        collection=await Collections.findAll({where:{typeId}})
      }
      return res.json(collection)
    }
    async getOne(req,res){
     const {id}=req.params
     const collectio=await Collections.findOne(
       {where:{id},
        include:[{model:DeviceInfo, as:'info'}]
      }
     )
     return res.json(collectio)
    }
    async delete(req,res){
    const typeid = req.params.id;
    Collections.destroy({where:{id:typeid}})
    const types= await Collections.findAll()
     return res.json(types)
     }
     async addLike(req,res){
      

     }
     
}
module.exports=new CollectionController()