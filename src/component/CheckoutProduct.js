import React from "react";
import './CheckoutProduct.css'
import { useStateValue } from "./stateProvider";

export default function CheckoutProduct({ id, title, image, price, rating }) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () =>{
      console.log(id);
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

  return (
    <div className="checkoutProduct">
      <img className="check-img" src={image} alt="image" />
      <div className="detail">
      <h3 className="title">{title}</h3>
      <h6 className="price">{price}</h6>
      <div className="prod_rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>⭐</p>
          ))}
      </div>
      <button onClick={removeFromBasket} className="checkout-btn">Remove from Basket</button>
      </div>
    </div>
  );
}
