import { useContext, useEffect } from "react"
import ListGroup from 'react-bootstrap/ListGroup'
import {Context} from '../index';
import { observer } from "mobx-react-lite"
import {Button} from 'react-bootstrap';
import {DeleteType} from '../http/deviceApi'
import {typeId} from '../http/collectionApi'
const TypeBar= observer(()=>{
    const {device}=useContext(Context)
    
    const Delete=(id)=>{
    DeleteType(id).then(data=>console.log(data))
   
    }
   
    return(
    <>
   
     <ListGroup className="mt-2">
        {device.Types.map(item=>
            <ListGroup.Item action variant="info"
            
            style={{cursor:'pointer'}}
            active={item.id===device.selectedType.id}
            onClick={()=>device.setselectedType(item)}
            key={item.id}
            >
              
                <h4>{item.name}</h4>
                <Button variant="dark"className="btn btn-danger col px-md-5" value={item.id} key={item.id} onClick={(e)=>Delete(e.target.value)}>удалить
                </Button>
               
            </ListGroup.Item>)}
           
        </ListGroup>
    </>
       
    )
})
export default TypeBar;