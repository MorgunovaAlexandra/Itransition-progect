import { Container,Row,Col } from "react-bootstrap"
import TypeBar from "../components/TypeBar"
import BrandBar from '../components/BrandBar'
import { observer } from "mobx-react-lite"
import { useContext, useEffect } from "react"
import {Context} from '../index';
import {fetchTypes} from '../http/deviceApi'
import {fetchCollections,typeId} from '../http/collectionApi'
import { useState } from "react"
const Shop=observer(()=>{
    const {device}=useContext(Context)
    useEffect(()=>{
     fetchTypes(null).then(data=>device.setTypes(data))
     fetchCollections(null).then(data=>device.setCollections(data))
     
    },[])
    useEffect(()=>{
    typeId(device.selectedType.id).then(data=>device.setCollections(data))
    },[device.selectedType])


    const [value,setValue]=useState('')
    const OnserchInput=(e)=>{
        setValue(e.target.value)
    }

    return(
        <>
    
        <Container >
        <div className="row gx-5">
        <div className="col">
        <input className="p-3 border bg-light" onChange={OnserchInput} value={value} placeholder="введите название аутнейма"></input> 
        </div>
        </div>
            <Row>
                <div>{value?`поиск по ${value}`:<div>'все аутнеймы'</div>}</div>
                <Col md={3}>
                   <TypeBar/>
                </Col>
                <Col md={9}> 
                    <BrandBar u={device.selectedType.id}value={value}/>
                </Col>
            </Row>
        </Container>
        </>
        
    )
})
export default Shop