const ApiError=require('../errorApi/ApiError')
const res = require('express/lib/response')

const {DeviceInfo}=require('../models/models')
class DeviceInf{
    async create(req,res){
    const {title,description,id}=req.body
    const DeviceInf=await DeviceInfo.create({title,description,id})
    return res.json(DeviceInf)
    }
    async getAll(req,res){
        const deviceInfo= await DeviceInfo.findAll()
        return res.json(deviceInfo)
    }
   
}
module.exports=new DeviceInf()