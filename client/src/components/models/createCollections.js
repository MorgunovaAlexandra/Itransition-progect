import { useContext,useState,  } from 'react';
import {useEffect} from 'react'
import {Button, Dropdown, Form, Modal,DropdownButton,Row,Col} from 'react-bootstrap'
import {Context} from '../../index'
import {fetchTypes} from '../../http/deviceApi'
import {fetchCollections} from '../../http/collectionApi'
import { observer } from "mobx-react-lite"
import {CreatCollections} from '../../http/collectionApi'
import jwt_decode from 'jwt-decode';

const CreateCollection=observer(({show,onHide})=>{
    let token= localStorage.getItem('token')
    const decoded = jwt_decode(token);
    const {user}=useContext(Context)
    const {device}=useContext(Context)
    const [name,setname]=useState('')
    const [type,setType]=useState(null)
    const [file, setFile]=useState(null)
    const [email,setemail]=useState(decoded.email)
    
    const [info,setinfo]=useState([])

    
    useEffect(()=>{
     fetchTypes().then(data=>device.setTypes(data))
     fetchCollections().then(data=>device.setCollections(data))
    },[])

    const addInfo=()=>{
        setinfo([...info,{title:'',description:'',number:Date.now()}])
    }
    const remuvInfo=(number)=>{
       setinfo(info.filter(i=>i.number!==number))
    }
    const selectFile=(e)=>{
     setFile(e.target.files[0])
    }
    const changeInfo=(key,value,number)=>{
        setinfo(info.map(i=>i.number===number?{...i,[key]:value}:i))
    }
    const addDevice=()=>{
    user.setEmail(decoded.email)
     const formData=new FormData()
     formData.append('name',name)
     formData.append('img',file)
     formData.append('typeId',device.selectedType.id)
     formData.append('email', email)
     formData.append('info',JSON.stringify(info))
     CreatCollections(formData).then(data=>onHide())
    }

    return(
    <Modal
    show={show}
    onHide={onHide}
    size='lg'
    centered
    >
        <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
        добавить коллецию 
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown>
                    <Dropdown.Toggle>{device.selectedType.name||'выберите тип'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>{device.Types.map(item=><Dropdown.Item 
                    onClick={()=>device.setselectedType(item)}
                    key={item.id}
                    
                    >{item.name}</Dropdown.Item>)}</Dropdown.Menu>
                </Dropdown>
            </Form>
            
            
            <Form.Control
            className='mt-3'
            placeholder='введите название'
            value={name}
            onChange={(e)=>setname(e.target.value)}
            />
            
             <Form.Control
            className='mt-3'
            placeholder='введите email'
            value={decoded.email}
            onChange={(e)=>user.setEmail(e.target.value)}
            />

            <Form.Control
            className='mt-3'
            placeholder='загрузите изображение'
            type="file"
            onChange={selectFile}
            />
            <Button onClick={addInfo} variant={"outline-dark"} className='mt-4'>Добавить новое свойство</Button>
            {info.map(item=>
            <Row key={item.number} className='mt-3'>
                <Col md={4}>
                   <Form.Control
                   placeholder='введите название характеристики'
                   value={item.title}
                   onChange={(e)=>changeInfo('title',e.target.value,item.number)}
                   />
                </Col>
                <Col md={4}>
                   <Form.Control
                   value={item.description}
                   placeholder='введите описание свойства'
                   onChange={(e)=>changeInfo('description',e.target.value,item.number)}
                   />
                </Col>
                <Col md={4}>
                    <Button onClick={()=>remuvInfo(item.number)} variant={'outline-danger'}>удалить</Button>
                </Col>
              
            </Row>)}
        </Modal.Body>
        <Modal.Footer>
            <Button variant={"outline-danger"} onClick={()=>onHide}>Закрыть</Button>
            <Button  variant={"outline-success"} onClick={addDevice}>Добавить</Button>
        </Modal.Footer>


    </Modal>

    )
})
export default CreateCollection;