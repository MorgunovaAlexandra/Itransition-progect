import {Context} from "../index";
import { useContext} from "react"
import {Row} from 'react-bootstrap'
import { observer } from "mobx-react-lite"
import DeviceItem from './DeviceItem'
import jwt_decode from 'jwt-decode';


const BrandBar=observer(({value})=>{
    const {device}=useContext(Context)
    let token= localStorage.getItem('token')
    const decoded = jwt_decode(token);
    return(
     <Row className="d-flex">
       
      {device.collections.filter(item=>item.email.includes(decoded.email)
      &&item.name.includes(value)).map(item=>
      <DeviceItem value={value}key={item.id} device={item} id={item}/>)}
           
     </Row>
    )
})

export default BrandBar