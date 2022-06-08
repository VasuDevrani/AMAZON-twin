import React from "react";
import "./Login.css";
import { useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const history = useNavigate();
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  function getin(e)
  {
      e.preventDefault();
      // login logic goes below
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          // logged in, redirect to homepage
          history('/');
        })
        .catch((e) => alert(e.message));

  }
  function register(e)
  {
    e.preventDefault();
    // register logic
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) =>{
        history('/');
      })
      .catch ((e) => alert(e.message));
  }

  return (
    <div className="login">
      <img src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png" alt="logo" />
      <div className="body">
      <div className="sign-head">Sign-In</div>
      <form className="login-form">
        <div>Enter your email</div>
        <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="email" />
        <div>Enter your password</div>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password" /><br />
        <button onClick={getin} className="continue">Continue</button>
      </form>
      <div className="terms">
        By continuing, you agree to Amazon's Conditions of Use and Privacy
        Notice.
      </div>
      </div>
      <div className="no-acc">
      _________No account?_________ <br />
      <button onClick={register} className="create-acc">Create your Amazon account</button>
      </div>
    </div>
  );
}
