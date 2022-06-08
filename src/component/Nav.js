import React, { useState } from "react";
import img from "./logo.png";
import flag from "./india.png";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./stateProvider";
import { auth } from "./firebase";

export default function Nav() {
  const [{ basket, user }, dispatch] = useStateValue();

  console.log(user);

  const login= () =>
  {
      if(user) 
      {
          auth.signOut();
          window.location.reload();
      }
  }

  return (
    <div className="nav">
      {/* logo */}
      <Link to="/">
        <div className="nav-logo">
          <img src={img} alt="logo" />
        </div>
      </Link>
      <div className="nav-address">
        <div className="address-head">Hello - {user? user.email: 'user'}</div>
        <div className="address-base">
          <ion-icon name="location-outline"></ion-icon>
          <span>
            <strong>Select your address</strong>
          </span>
        </div>
      </div>
      <div className="search-area">
        <input type="text" className="search-box" />
        <button className="search-btn">
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
      <div className="flag">
        <img src={flag} alt="India" />
      </div>
      <Link to={!user && "/login"}>
        <div onClick={login} className="nav-sign-in">
          Hello, {user?'Sign out' : 'Sign in'} <br />
          <strong> Account & Lists </strong>
          <ion-icon name="caret-down-outline"></ion-icon>
        </div>
      </Link>
      <div className="orders">
        Returns <br />
        <strong>& Orders</strong>
      </div>
      <Link to="/checkout">
        <div className="cart-icon">
          <ion-icon name="basket-outline"></ion-icon>{user? basket?.length : 0}
        </div>
      </Link>
    </div>
  );
}
