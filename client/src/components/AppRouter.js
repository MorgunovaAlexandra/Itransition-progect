import { useContext } from 'react';
import {Routes,Route} from 'react-router-dom';
import {AuthRouts,PublickRouts} from '../routes'
import {Context} from '../index';
const AppRouter=()=>{
    const {user}=useContext(Context)
    return(
       <Routes>
        {user.isAuth && AuthRouts.map(({path,Component})=>
            <Route exact key={path} path={path} element={<Component/>}/>
            )}

        {PublickRouts.map(({path,Component})=>
            <Route exact key={path} path={path} element={<Component/>}/>
        )}
       
       </Routes>
       
    )
}
export default AppRouter;