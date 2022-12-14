import React, { useEffect } from 'react'
import "./signIn.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import app from '../fire'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getRedirectResult, GoogleAuthProvider,signInWithPopup,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
const SignIn = () => {
  
  const dispatch=useDispatch()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const auth = getAuth(app);
  let history=useNavigate()
  const googleSignIn=(e)=>{
    e.preventDefault()
    const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // The signed-in user info.
    const user = result.user;
    if(user){
      dispatch({
        type:'ADD_USER',
        data:user,
      })
      history('/')
    }
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


  }
  const handelSubmit=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user){
      alert("Login Sucessfull")
      history('/')
    }
    // ...
    })
    .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    });
  }
  return (
    <div className='SignIn'>
        <img src='https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png'></img>
        <div className='SignIn__box'>
          <h2>Sign In</h2>
          <div className='SignIn__input'>
           <form onSubmit={(e)=>handelSubmit(e)}>
             <div className='SignIn__title'><h5>Email or mobile phone number</h5>
                <input type="text"
                 value={email}
                 onChange={e=>setEmail(e.target.value)}
                ></input></div>
          <div className='SignIn__title'><h5>Password</h5>
          <input type="password"
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
          ></input></div>
          <button className='SignIn__btn' onClick={e=>handelSubmit(e)}>Continue</button>
          <p>
            By continuing, you agree to Amazon's<span> Conditions of Use</span> and <span>Privacy Notice</span>.
          </p>
           </form>
          </div>
          <span>Need help ?</span>
        </div>
        <span>New to Amazon</span>
        <button className='SignIn__btn --signupbtn' onClick={e=>googleSignIn(e)}>SignIn with <img src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png' style={{height:"30px", width:"30px"}}></img>oogle</button>
        <button className='SignIn__btn --signupbtn'><Link to="/signup" className='link'>Create your Amazon account</Link></button>
    </div>
  )
}

export default SignIn
