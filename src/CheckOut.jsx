import React from 'react'
import { useStateValue } from './StateProvider';
import './CheckOut.css'
import CheckoutProduct from './CheckoutProduct';
import { SubtitlesOffSharp } from '@mui/icons-material';
import Subtotal from './Subtotal';
import Header from './Header';

const CheckOut = () => {
const [{ basket }] = useStateValue();

  return (
    <>
<Header/>    
    <div className='checkout'>
      <div className="checkout__left">

      <img className="checkout__ad"  src="https://icms-image.slatic.net/images/ims-web/c2efbfa8-8f7b-4a23-82aa-9892f8ee2b9b.jpg_1200x1200.jpg" alt="" />
      
      {basket?.length === 0 ? (
        <div>
          <h2 className='checkout__title'>Your Shoping basket is empty</h2>
          <p>
            You have no items in your basket. 
          </p>
        </div>
      ) : (
        <div>
          <h2>Your Shopping Basket</h2>
          {/* List of all the Checkout Products/items */}
{basket.map(item => (
  <CheckoutProduct
  id={item.id}
  title={item.title}
  image={item.image}
  price={item.price}
  rating={item.rating}
  
  /> 
  
  ))}

        </div>
      )
    }


    </div>

{basket.length > 0 && (
  <div className="checkout__right">

<Subtotal />  
 
  </div>
  
  )}

    </div>
  </>
  )
}

export default CheckOut
