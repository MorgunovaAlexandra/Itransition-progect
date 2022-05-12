import {Button, Form, Modal} from 'react-bootstrap'
import {useState} from 'react'
import {CreatType} from '../../http/deviceApi'
import { observer } from "mobx-react-lite"
const CreateType=observer(({show,onHide})=>{
    const [value,setvalue]=useState('')
   const addType=()=>{
    CreatType({name:value}).then(data=>{setvalue('')
    onHide()
    })
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
        добавить тип
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control 
                placeholder='введите название типа'
                value={value}
                onChange={e=>setvalue(e.target.value)}
                >

                </Form.Control>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={"outline-danger"} onClick={()=>onHide}>Закрыть</Button>
            <Button  variant={"outline-success"} onClick={addType}>Добавить</Button>
        </Modal.Footer>

    </Modal>

    )
})
export default CreateType;