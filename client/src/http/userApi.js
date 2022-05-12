import { $authhost,$host } from "./index";
import jwt_decode from 'jwt-decode'
export const registration=async(email,password)=>{
    const {data} = await $host.post('api/user/registration',{email,password, role:'USER'})
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
    }
export const login=async(email,password)=>{
    const {data}= await $host.post('api/user/login',{email,password})
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
    }
 export const check=async()=>{
     const {data} = await $authhost.get('api/user/auth')
     localStorage.setItem('token',data.token)
     return jwt_decode(data.token)
         }
export const deleteUser=async(id)=>{
     const {data} = await $authhost.post('api/user/delete/'+id)
     return data
         }
export const createAdmin=async(id)=>{
     const {data}=await $authhost.post('api/user/users/'+id)
     return data
}