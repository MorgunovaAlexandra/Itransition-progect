import { $authhost,$host } from "./index";
import jwt_decode from 'jwt-decode'
export const CreatCollections=async(type)=>{
    const {data} = await $authhost.post('api/collection',type)
    return data
    }
export const fetchCollections=async()=>{
    const {data}= await $host.get('api/collection')
    
    return data
}
export const fetchOneCollections=async(id)=>{
    const {data}= await $host.get('api/collection/'+id)
    
    return data
}
 export const deleteOneCollections=async(id)=>{
     const {data}=await $host.post('api/collection/delete/'+id,id)
     return data
 }
 export const typeId=async(typeId)=>{
     const {data}=await $host.get('api/collection',{params:{typeId}})

    return data
 }