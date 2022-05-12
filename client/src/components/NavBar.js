
import { useContext } from "react"
import { Context } from "../index"
import {SHOP_ROUTE,LOGIN_ROUTE,ADMIN_ROUTE,MY_PAGE} from '../utils/consts'
import Nav from 'react-bootstrap/Nav';
import {Button, Container } from 'react-bootstrap';
import { observer } from "mobx-react-lite"
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import jwt_decode from 'jwt-decode';

const NavBar=()=>{
  let token= localStorage.getItem('token')
  const decoded = jwt_decode(token);

  const [value,setValue]=useState('')
  const OnserchInput=(e)=>{
      setValue(e.target.value)
  }
    const {user}=useContext(Context)
    const navigate = useNavigate();

    const logout=()=>{
      navigate(LOGIN_ROUTE)
      user.setIsUser({})
      user.setIsAuth(false)
    }
    return(
        
       <>
       <nav className="navbar navbar-expand-lg navbar-dark ">
       <NavLink className="navbar-brand mx-7 "  to={SHOP_ROUTE}>посмотреть коллекции</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-5 mt-lg-2">
    {
                    user.isAuth?
                    <div className="d-flex justify-content-between">
                    <Button className="mx-1 btn btn-secondary mt-2" action variant="info" onClick={()=>logout()}>выйти</Button>
                    {decoded.role=='USER'?<Button variant={"light"} className="mx-1 btn  btn-secondary mt-2" data-toggle="tooltip"     data-placement="left" onClick={()=>navigate(ADMIN_ROUTE)}>создать коллекцию или аутнейм</Button>:<div></div>}
                    {decoded.role==='ADMIN'?  <Button variant={"light"} className="mx-1 btn btn-secondary mt-2" data-toggle="tooltip" data-placement="left" onClick={()=>navigate(ADMIN_ROUTE)}>админ панель </Button>
                   :
                  <div></div>
                  }
                    <div className="">{user.email}</div>
                    </div>:
                    
                    <Button action variant="info" onClick={()=>navigate(LOGIN_ROUTE)} >авторизация</Button>
                    }
    </ul>
   
  </div>
</nav> 
       </>
    )
}
export default NavBar