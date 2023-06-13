import React, { useState } from 'react'
import { auth } from './firebase';
import './Login.css'
// import{Link, useHistory } from "react-router-dom"

function Login() {
  // const hisory = useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  const login = event => {
    event.preventDefault(); // stops refresh!!
    // login logic...
    auth
    .sginInWithEmailAndPassword(email, password)
    .then((auth) => {
  //logged in, redirect to homepage
  // to send user to the home page after log in =>
  // history.push('/') ;
})
.catch((e) => alert(e.message));
  }

  const register = event => {
    event.preventDefault(); // stops refresh!!
// register logic

auth.createUserWithEmailAndPassword(email, password)
.then(auth =>{
  //create and user and logged in , redirect to homepage
  // history.push('/') ;
})
.catch((e) => alert(e.message));
  }
  return (
    <>
     
    <div className='login'>
{/* <Link to = "/"> */}
   <img 
   className='login__logo'
src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png" alt="logo"
/>

   {/* </Link> */}

   <div className="login__container">
    <h1>Sign in</h1>
    <form action="">
<h5>E-mail</h5>
<input value={email} onChange={event => setEmail(event.target.value)} type="email" />
<h5>Password</h5>
<input value={password}  onChange={event => setPassword(event.target.value)} type="password" name="" id="" />
<button onClick={login} type='submit' className='login__signInButton'>Sign in</button>
    </form>
    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
    <button onClick={register} className='login__registerButton'>Create Your Amazon Account</button>
   </div>
    </div>
</>
  )
}

export default Login
