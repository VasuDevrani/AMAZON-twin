import React from 'react'
import banner from './kindle.jpg'
import './Checkout.css'
import { useStateValue } from './stateProvider'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'

export default function Checkout() {

  const [{basket, user}] = useStateValue();

  return (
    <div className='checkout'>
        <img className='banner' src={banner} alt="..." />
        {
          basket.length && user?(
            <>
            <div style={{fontSize: '6vw' , fontWeight:'bolder', textAlign: 'center', marginTop: '3vw'}}>Your Shopping List</div>
            {
              basket.map((item) => (
                <CheckoutProduct
                  key = {item.id}
                  id = {item.id}
                  title = {item.title}
                  image = {item.image}
                  price = {item.price}
                  rating = {item.rating} 
                />
              ))
            }
              <SubTotal/>
            </>
          ):(
            <p className='negative-line'>Uh Oh.. GO! grab some items </p>
          )
        }
    </div>
  )
}
