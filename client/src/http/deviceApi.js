import { $authhost,$host } from "./index";
import jwt_decode from 'jwt-decode'
export const CreatType=async(type)=>{
    const {data} = await $authhost.post('api/type',type)
    return data
    }
export const fetchTypes=async(typeId)=>{
    const {data}= await $host.get('api/type',{params:{typeId}})
    
    return data
}
 export const DeleteType=async(id)=>{
     const {data}=await $host.post('api/type/delete/'+id,id) 
     return data
 }