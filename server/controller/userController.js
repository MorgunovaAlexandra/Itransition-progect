const ApiError=require('../errorApi/ApiError')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const {User,Basket}=require('../models/models')
const generateJwt=(id,email,role)=>{
  return jwt.sign(
    {id,email,role},
    process.env.SECRET_KEY,
    { expiresIn:'24h'}
    )
}

class UserController{
    async registration(req,res,next){
      const {email,role,password}=req.body
      
      const hasPass= await bcrypt.hash(password,5)
      if(!email||!password){
        return next(ApiError.badRequest('некоректный email или пароль'))
      }
      const conditate=await User.findOne({where:{email}})
      if(conditate){
        return next(ApiError.badRequest('пользователь с таким email уже существует'))
      }
      const user=await User.create({email,role,password:hasPass})
      const token=generateJwt(user.id,user.email,user.role)
      return res.json({token})
    }

    async login(req,res,next){
    const {email,password}=req.body
    const user=await User.findOne({where:{email}})
    if(!user){
     return next(ApiError.internal('такого пользователя не существует'))
    }
    let compaPass=bcrypt.compareSync(password,user.password)
    if(!compaPass){
      return next(ApiError.internal('указанный пароль не верный'))
    }
    const token=generateJwt(user.id,user.email,user.role)
    return res.json({token})
    }
    async chesk(req,res,next){
      const token=generateJwt(req.user.id,req.user.email,req.user.role)
      return res.json({token})

    }
    async getAll(req,res,next){
      const {email,password}=req.body
      let uu=await User.findAll()
     
       return res.json(uu)
      }
      async delete(req,res){
        const typeid = req.params.id;
        User.destroy({where:{id:typeid}})
        const types= await User.findAll()
        return res.json(types)
        
       }
       async changeRole(req,res){
         const userId=req.params.id
         User.update({role:'ADMIN'},{where:{id:userId}})
         let u=User.findAll()
        return res.json(u)
       }
  
  
}
module.exports=new UserController()