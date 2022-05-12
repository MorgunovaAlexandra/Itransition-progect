require('dotenv').config()
const router=require('./routes/index')
const express=require("express")
const sequelize=require('./db')
const models=require('./models/models')
const PORT=process.env.PORT|| 5003
const cors=require('cors')

const path=require('path')
const fileUpload=require('express-fileupload')
const app=express()
app.use('/static', express.static(__dirname + '/public'));
const errorHandler=require('./midlewire/ErrorHandlerMddleWare')

app.use(cors())

app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api',router)

//последний мидл вэйр
app.use(errorHandler)


const start=async()=>{
    try{
       await sequelize.authenticate()
       await sequelize.sync()//сверяет состояние базы данных со схемой данных
        app.listen(PORT,()=>{
            console.log(`serser start ${PORT}`)
        })
    }
    catch(e){
        console.log(e)
    }
}
start()
