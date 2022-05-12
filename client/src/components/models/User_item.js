import {Col,Card,Image} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import {DEVICE_ROUTE} from '../../utils/consts';
import {REACT_APP_API_URL} from '../../env'
const User_item=({device})=>{
    const navigate = useNavigate();

    console.log(navigate)
    return(
        <>
      
        <Col onClick={()=>navigate(DEVICE_ROUTE+'/'+device.id)} md={4}>
        <Card style={{width:150, cursor:'pointer'}}>
         <Image  width={150} height={150} src={REACT_APP_API_URL+device.img}/>
         <div >
             <div className='text-black-50'>{`email: ${device.email}`}</div>
             <h1>{device.name}</h1>
         </div>

        </Card>
       </Col>
        </>
       
    )
}
export default User_item;