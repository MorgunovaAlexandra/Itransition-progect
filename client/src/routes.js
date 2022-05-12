
import Admin from './pages/ter'
import Shop from './pages/shop'
import Auth from './pages/auth'
import DevicePage from './pages/devisePage'

import UserPage from './pages/UserPage'

import {SHOP_ROUTE,LOGIN_ROUTE,REGISTRATION_ROUTE,DEVICE_ROUTE,ADMIN_ROUTE,USER_PAGE}from './utils/consts'

export const AuthRouts=[
{
    path:ADMIN_ROUTE,
    Component:Admin
},
{
    path:USER_PAGE,
    Component:UserPage
},
{
    path:DEVICE_ROUTE+'/:id',
    Component:DevicePage
}

]// на эти только авторизованный
export const PublickRouts=[
    { 
        path:SHOP_ROUTE,
        Component:Shop,

    },
    { 
        path:LOGIN_ROUTE,
        Component:Auth,
    },
    { 
        path:REGISTRATION_ROUTE,
        Component:Auth,
    },
    

]//на эти маршруты может перейти любой пользователь