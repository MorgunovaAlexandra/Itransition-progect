import axios from 'axios'
import {REACT_APP_API_URL} from '../env'
const $host=axios.create({
    baseURL:REACT_APP_API_URL
})

const $authhost=axios.create({
    baseURL:REACT_APP_API_URL
})

const authInterseptor=config=>{
    config.headers.authorization=`Bearer ${localStorage.getItem('token')}`
    return config
}
$authhost.interceptors.request.use(authInterseptor)

export{
    $host,
    $authhost
}