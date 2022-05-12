import {Col,Card,Image, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import {DEVICE_ROUTE} from '../utils/consts';
import {REACT_APP_API_URL} from '../env'
import { observer } from "mobx-react-lite"
import { useState, useEffect } from 'react';
const DeviceItem=observer(({device})=>{
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    
    console.log(navigate)
    useEffect(() => {
        // Обновляем название докуммента, используя API браузера
        document.title = `Вы нажали ${count} раз`;
      });
    return(
        <>
   
        <Col className='row-cols-lg-5 g-2 g-lg-2' md={4} >
        <Card  onClick={()=>navigate(DEVICE_ROUTE+'/'+device.id)} className="col-6  g-2 g-lg-3 "style={{width:150, cursor:'pointer'}}>
         <Image  width={150} height={140} src={REACT_APP_API_URL+device.img}/>
         <div >
             <div className='text-black-50'>{`email: ${device.email}`}</div>
             <h1>{device.name}</h1>
            
             
         </div>
        </Card>
        
       <i className='material-icons' style={{color:"red"}}>favorite</i>
       <i  className="material-icons" onClick={() => setCount(count -1)}>thumb_down</i>
       <i className="material-icons" onClick={() => setCount(count + 1)}>thumb_up</i>
       <div>понравилось {count} раз</div>
       </Col>   
        </>
       
    )
})
export default DeviceItem;