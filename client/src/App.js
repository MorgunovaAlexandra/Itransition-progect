

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { observer } from "mobx-react-lite"
import { useContext,useEffect,useState } from 'react';
import {Context} from './index'
import React from "react";
import ReactDOM from "react-dom";
import {check} from '../src/http/userApi'

import './fon/style.css'
const  App=observer(()=> {
 const {user}=useContext(Context)
  const [loading,setLoading]=useState(true)
  React.useEffect(()=>{
    check().then(data=>{
      user.setIsAuth(true)
    }).finally(()=>setLoading(false))
  },[])
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    if (isReturningUser) {
      return savedMode;
     
    } else if (userPrefersDark) {
      return true;
     
    } else {
      return false;
    }
   
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
        <BrowserRouter>
      <nav>
        <div className="toggle-container">
        <NavBar/>
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
        </div>
      </nav>
      <main>
      <AppRouter/>
      </main>
    </BrowserRouter>
    </div>
  );
})

export default App;
