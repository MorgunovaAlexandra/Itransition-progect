//const { require } = require('../models/models')
const ApiError=require('../errorApi/ApiError')
const res = require('express/lib/response')

const {Type}=require('../models/models')
class TypeController{
    async create(req,res){
    const {name}=req.body
    const type=await Type.create({name})
    return res.json(type)
    }
    async getAll(req,res){
    const types= await Type.findAll()
    return res.json(types)
    }
    async delete(req,res){
     const typeid = req.params.id;
     Type.destroy({where:{id:typeid}})
     const types= await Type.findAll()
     return res.json(types)
     
    }
}
module.exports=new TypeController()