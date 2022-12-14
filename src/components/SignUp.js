import React from 'react'
import {useState} from 'react'
import app from '../fire'
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
const SignUp = () => {
   let history=useNavigate()
  const [people,setPeople]=useState({name:'',email:'',phone:'',password:''})
  const auth =getAuth(app)
  const handelChange=(e)=>{
    e.preventDefault()
    const targ=e.target.name
    const value=e.target.value
    setPeople({...people,[targ]:value})
  }
  const dispatch=useDispatch()
  const onSub=(e)=>{
    e.preventDefault()
    if(people.name&&people.phone&&people.password){
      
    createUserWithEmailAndPassword(auth, people.email, people.password)
      .then((userCredential) => {
    // Signed in 

      const user = userCredential.user;
      updateProfile(user,{
        displayName:people.name
      })
      if(user){
        dispatch({
          type:"ADD_USER",
          data:user
        })
        alert("Account created sucessfully")
        history("/")
      }

      setPeople({name:'',email:'',phone:'',password:''})
    // ...
    })
    .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
    });
    }
  }
  return (
     <div className='SignIn'>
        <img src='https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png' alt='amazonlogo'></img>
        <div className='SignIn__box'>
            <h3>Create Account</h3>
          <div className='SignIn__input'>
            <form onSubmit={(e)=>onSub(e)}>
              <div className='SignIn__title'><h5>Full Name</h5>
                <input type="text"
                placeholder='Enter your name'
                name='name'
                 value={people.name}
                 onChange={handelChange}
          ></input>
            </div>
          
            <div className='SignIn__title'><h5>Mobile Number</h5>
                <input type="text"
                placeholder='Enter your number'
                name='phone'
                 value={people.phone}
                 onChange={e=>handelChange(e)}
          ></input>
            </div>
          
          <div className='SignIn__title d-flex flex-column'><h5>Email(optional)</h5>
            <input type="text"
            name='email'
                  value={people.email}
                  onChange={e=>handelChange(e)}
          ></input>
          </div>
          
          <div className='SignIn__title'><h5>Password</h5>
          <input type="password"
                  name='password'
                  value={people.password}
                  onChange={e=>handelChange(e)}
          ></input>
          <span>Passwords must be at least 6 characters.</span></div>
          <div className='SignIn__title'>
            <p>
                By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.
            </p>
          </div>
          <button className='SignIn__btn' onClick={e=>onSub(e)}>Continue</button>
          <div className='SignIn__title'>
               <span>
                 Already have an account? Sign in
                Buying for work? Create a free business account
               </span>
          </div>
          <div className='SignIn__title'>
            <span>
                By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.
            </span>
          </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default SignUp
