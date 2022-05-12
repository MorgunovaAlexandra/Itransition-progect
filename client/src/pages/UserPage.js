import {Context} from "../index";
import { useContext } from "react"
import {Row} from 'react-bootstrap'
import { observer } from "mobx-react-lite"

import jwt_decode from 'jwt-decode';
import User_item from "../components/models/User_item";
const UserPage=observer((props)=>{
    const {device}=useContext(Context)
    let token= localStorage.getItem('token')
    const decoded = jwt_decode(token);
    console.log(decoded)
    return(
     <Row className="d-flex">
       
       {device.collections.filter(item=>item.email.includes(props.user)).map(item=><User_item key={item.id} device={item}/>)}
           
     </Row>
    )
})

export default UserPage;