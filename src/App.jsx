import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import CheckOut from './CheckOut';
import Login from './Login';
// import { useStateValue } from "./StateProvider"
// import { auth } from './firebase';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
// const[{user}, dispatch] = useStateValue();
// useEffect <<<<< Powerful
//piece of code which runs based on a given condition

// useEffect(() => {

// const unsubscribe = auth.onAuthStateChanged((authUser) => {
//   if(authUser) {
//     // the user is logged in...
//     dispatch({
//       type: "SET_USER",
//       user:authUser
//     })
//   } else {
// // the user is logged out...
// dispatch({
//   type: "SET_USER",
//   user:null
// });
//   }

// });
// return () => {
//   //Any cleanup operation go in here...
//   unsubscribe();
// }
// }, [])

  return(
<div className="app">
  <BrowserRouter>
  <Routes>

<Route path='/' element= {<Home/>} />
<Route path='/checkout' element= {<CheckOut/>} />
<Route path='/login' element= {<Login/>} />

 
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
