import {Container,Form,Button,Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { NavLink,useLocation } from 'react-router-dom';
import {REGISTRATION_ROUTE,LOGIN_ROUTE} from '../utils/consts'
import { registration,login } from '../http/userApi';
import {useContext, useState} from 'react'
import { observer } from "mobx-react-lite"

import {Context} from '../index'
import { useNavigate } from 'react-router-dom';
import {SHOP_ROUTE} from '../utils/consts'




const Auth=observer(()=>{
  const navigate = useNavigate();
    const {user}=useContext(Context)
    const location=useLocation()//маршрут
    const isLogin=location.pathname===LOGIN_ROUTE

    const [email,setEmail]=useState('')
    const [password,setpassword]=useState('')
    const click= async()=>{
      try{
        let data
        if(isLogin){
        data=await login(email,password)
        navigate(SHOP_ROUTE)
        }
        else{
         data=await registration(email,password)
         console.log(data)
        }
        user.setIsUser(user)
        user.setIsAuth(true)
        
      }
      catch(e){}
     
        
    }
    
    
return(
    <Container 
    className='d-flex justify-content-center align-items-center'
    style={{height: window.innerHeight-54}}
    >
       <Card style={{width:600}} className="p-5">
          
       {isLogin?<h2 className='m-auto'>Авторизация</h2>:<h2 className='m-auto'>Регистрация</h2>}
       <Form className='d-flex flex-column' >
         <Form.Control
         className='mt-3'
         placeholder='введите ваш email'
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         />
       
         <Form.Control
         className='mt-3'
         placeholder='введите ваш password'
         value={password}
         type="password"
         onChange={(e)=>setpassword(e.target.value)}
         />
       <Button className='btn btn-info mt-3' onClick={click} > 
       {isLogin?'Войти':'Регистрация'}
       </Button>
         <Row >
         {isLogin?
           <div>нет аккаунта?.. <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink></div>
           :
           <div>есть акканут?..<NavLink to={LOGIN_ROUTE}>Войдите</NavLink></div>
           }
            
         </Row>
         
       </Form>
       </Card>
        
    </Container>
)
})
export default Auth;