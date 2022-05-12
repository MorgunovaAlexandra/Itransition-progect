import { Container,Col,Image,Row,Card, Button} from "react-bootstrap"
import { useContext,useState,useEffect} from "react"
import { useParams } from 'react-router-dom';
import{Context} from '../index'
import {REACT_APP_API_URL} from '../env'
import {fetchOneCollections} from '../http/collectionApi'
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import {SHOP_ROUTE} from '../utils/consts'
import {deleteOneCollections} from '../http/collectionApi'
import {NavLink} from 'react-router-dom'
const DevicePage=()=>{
    
    const navigate = useNavigate();
    const {user}=useContext(Context)
    const {device}=useContext(Context)
    const [devic,setDevice]=useState({info:[]})
    const { id } = useParams();

     useEffect (()=>{
        fetchOneCollections(id).then(data=>setDevice(data))
    })
    let token= localStorage.getItem('token')
    const decoded = jwt_decode(token);
    let Delete
   
  
    Delete=(id)=>{
        deleteOneCollections(id).then(data=>console.log(data))
       }

 
    

  
    return(
        <Container className="mt-3">
           
            <Row>
            <Col md={4}>
               <Image width={200} height={300} src={REACT_APP_API_URL+devic.img}/>
              
           </Col>
           <Col md={3}>
             
               <div className="text-info"><h1>{devic.name}</h1></div>
              
               <div >описание:{devic.info.map(item=><div><div>{item.title}</div>
              <div>{item.description}</div></div>
               )}</div>
           </Col>
           <Col md={4}>
           <Card>
        <Button value={id} onClick={()=>Delete(id)}>удалить</Button>
           
               
           
           </Card>
           </Col>
            </Row>
            <Row>
           
               
            </Row>
          
        </Container>
    )
}
export default DevicePage