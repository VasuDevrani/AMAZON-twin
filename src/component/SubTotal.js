import React from 'react'
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './stateProvider';
import { getBasketTotal } from './reducer';

export default function SubTotal() {

    const [{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat
         renderText = {(value) =>(
             <>
                <p>
                    SubTotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" />This order contains a gift
                </small>
             </>
         )}
         decimalScale={2}
         value={getBasketTotal(basket)}
         displayType={"text"}
         thousandSeparator={true}
         prefix={"Rs"}
         />
         <button>Proceed to checkout</button>
    </div>
  )
}
