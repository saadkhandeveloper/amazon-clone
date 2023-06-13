// import React from 'react'
// import 'Subtotal.css'
// import CurrencyFormat from 'react-currency-format';
// import { useStateValue } from './StateProvider';

// function Subtotal() {
// const [{basket}, dispatch ] = useStateValue();

//   return (

//     <div className='subtotal'>
//       {/* Price */}
//       <CurrencyFormat
// renderText={(value) => (
//     <>
//     <p>
//         Subtotal ({basket.length} items): <strong>{``}</strong>
//     </p>
//     <small className="subtotal__gift">
//         <input type="checkbox" /> This order contains
//     </small>
//     </>
// )}

//       decimalScale={2}
//       value={getBasketTotal(basket)}
//       displayType= {"text"}
//       thousandSeparator={true}
//       prefix="$"
//       />
//       <button>Proceed to checkout</button>
// {/* install the react-currency-format pakage */}
//     </div>
//   )
// }

// export default Subtotal
