import React from 'react'
import './Product.css'
import { useStateValue } from './stateProvider'

export default function Product({id, title, image, price, rating}) {

    const[{user, basket}, dispatch] = useStateValue();

    function addToBasket(){
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    function editBasket()
    {
        if(user!=null)
        {
            addToBasket();
        }
    }


  return (
    <div className='product'>
        <p className='title'>{title}</p>
        <p className="product_price">
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
            {Array(rating)
            .fill()
            .map((_) => (
                <p>⭐</p>
            ))}
        </div>
        <img src={image} alt="..." />
        <button onClick={editBasket} className='product-btn btn btn-warning'>Add to basket</button>
    </div>
  )
}
