const sequelize=require('../db')
const {DataTypes}=require('sequelize')

const User=sequelize.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING,defaultValue:"USER"}
})
const Basket=sequelize.define('basket',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true}
})
const Basketcollection=sequelize.define('basket_collection',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true}
})
 const Collections=sequelize.define('collection',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    typeId:{type:DataTypes.INTEGER,allowNull:false},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
    img:{type:DataTypes.STRING,allowNull:false},
    email:{type:DataTypes.STRING}
    
 })

const Type=sequelize.define('type',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
})
const DeviceInfo=sequelize.define('deviceinfo',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    title:{type:DataTypes.STRING,allowNull:false},
    description:{type:DataTypes.STRING,allowNull:false}
})
 
User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(Basketcollection)
Basketcollection.belongsTo(Basket)

Basketcollection.hasOne(Collections)
Collections.belongsTo(Basketcollection)

Collections.hasMany(Type)
Type.belongsTo(Collections)

Collections.hasMany(DeviceInfo,{as:'info'})
DeviceInfo.belongsTo(Collections)

module.exports={
    User,
    Basket,
    Basketcollection,
    Type,
    DeviceInfo,
    Collections
}