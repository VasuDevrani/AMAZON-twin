import './App.css';
import { Routes, Route} from "react-router-dom";
import React, { useEffect } from 'react';
import Home from './component/Home';
import Checkout from './component/Checkout';
import Nav from './component/Nav';
import Login from './component/Login.js';
import { useStateValue } from './component/stateProvider';
import { auth } from './component/firebase';

function App() {

  const [{basket, user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser)
      {
          // user logged in
          dispatch({
            type: 'SET_USER',
            user: authUser,
          })
      }else{
          // user logged out
          dispatch({
            type: 'SET_USER',
            user: null,
            basket: []
          })
      }
    })

    return () =>{
      unsubscribe();
    }
  },[])

  console.log(user);

  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<><Home/></>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/checkout" element={<><Nav/><Checkout/></>} />
    </Routes>
    </div>
  );
}

export default App;
