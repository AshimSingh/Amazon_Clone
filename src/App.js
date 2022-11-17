import React from 'react'
import Home from './pages/home'
import Header from './components/Header'
import CartPage from './pages/cart'
import Error from './pages/error'
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = ()=>{
    return(
        <div className='app'>
            {/* <Header/> */}
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route exact path='/' element={<Home/>} ></Route>
                    <Route  path='/cart' element={<CartPage/>} ></Route>
                    <Route path="/product/:id" element={<CartPage/>}></Route>
                    <Route path="*" element={<Error/>}></Route>
                </Routes>
                <Footer/>
        </BrowserRouter>
        </div>
    )
}
export default App