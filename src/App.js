import React,{useEffect} from 'react'
import Home from './pages/home'
import Header from './components/Header'
import CartPage from './pages/cart'
import Error from './pages/error'
import Footer from './components/Footer'
import SelectedProductPage from './pages/SelectedProductPage'
import SignInpage from './pages/signInpage'
import SignUppage from './pages/SignUppage'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import app from './fire'
const App = ()=>{
    const dispatch=useDispatch()
    const auth=getAuth(app)
    useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    dispatch(
        {
            type:"ADD_USER",
            data:user,
        }
    )
    // ...
  } else {
    // User is signed out
    // ...
  }
});
  },[])
  
    return(
        <div className='app'>
            {/* <Header/> */}
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route exact path='/' element={<Home/>} ></Route>
                    <Route  path='/cart' element={<CartPage/>} ></Route>
                    <Route path="/product/:id" element={<SelectedProductPage/>}></Route>
                    <Route path="/signin" element={<SignInpage/>}></Route>
                    <Route path="/signup" element={<SignUppage/>}></Route>
                    <Route path="*" element={<Error/>}></Route>
                </Routes>
                <Footer/>
        </BrowserRouter>
        </div>
    )
}
export default App