import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'


const CheckoutProduct = (id, title, image, price, rating) => {
  const [{basket}, dispatch] = useStateValue
const removeFromBasket = () => {
// remove item from basket
dispatch({
  type:"REMOVE_FROM_BASKET",
  id:id,
})
}

  return (
    <div className='checkoutProduct'> 
      <img src={image} className="checkoutProduct__image" alt="" />
     <div className="checkoutProduct__info">
        <p className="checkoutProduct__title" >{title}</p>
        <p className="checkoutProduct__price" >
        <small>$</small>
        <strong>{price}</strong>
            </p> 
            </div>
     <div className="checkoutProduct__rating">
    {
        Array(rating)
        .fill()
        .map((_,i) => (
            <p>⭐</p>
        ))
    }
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>

    </div>
   
  )
}

export default CheckoutProduct;
 