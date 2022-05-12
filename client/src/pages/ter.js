import {Container, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import CreateCollection from '../components/models/createCollections'
import CreateType from '../components/models/CreateType';
import {useState,useContext, useEffect} from 'react'
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import {Context} from '../index'
import{USER_PAGE} from '../utils/consts'
import UserPage from './UserPage';
import {deleteUser,createAdmin} from '../http/userApi'
import { observer } from "mobx-react-lite"
const Admin =observer(()=>{
    let token= localStorage.getItem('token')
    const decoded = jwt_decode(token);
    const [typevisible, settypevisible]=useState(false)
    
    const [collection, setcollection]=useState(false)
    const {user}=useContext(Context)
    const Butt=()=>{
            axios.get('http://localhost:8000/api/user/users').then(res=>{
                user.setUsers(res.data)
            })
        }
    const DeleteUser=(id)=>{
        
        deleteUser(id).then(data=>user.setUsers(''))
    
    }
    const addAdmin=(id)=>{
        createAdmin(id).then(data=>user.setUsers(data))
    }
    return(
        <div>
             <Container className='d-flex flex-column'>
           
           <div >
           <Button onClick={()=> setcollection(true)} variant={"outline-info"} className='mt-4 p-2'>Добавить коллекцию</Button>
          <Button onClick={()=>settypevisible(true)} variant={"outline-info"} className='mt-4 p-2'>добавить тип</Button>
           </div>
       <CreateCollection show={collection} onHide={()=>setcollection(false)}/>
        <CreateType show={typevisible} onHide={()=>settypevisible(false)}/>
       
       
       </Container>
        {decoded.role==='USER'? 
        <Container className='d-flex flex-column  mt-3'>
           </Container>
        :
        <Container>
     
     <Button className='btn btn-info  mt-4' onClick={Butt}>посмотреть страницы всех User</Button>
     {user.users.map((item)=>
    <div style={{color:'royalblue'}}>
       
         <h2 style={{color:'steelBlue'}}>страница :{item.email}</h2>
         <Button  variant={"danger"} className='mt-3 p-2' onClick={()=>DeleteUser(item.id)}>удалить</Button>
         <Button  variant={"success"} className='mt-3 p-2 ' onClick={()=>addAdmin(item.id)}>сделать админом</Button>
         <UserPage user={item.email}/>
    </div>

         )}
        </Container>
        }
        </div>
    )
})
export default Admin