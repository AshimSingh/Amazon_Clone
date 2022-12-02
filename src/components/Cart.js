import React from 'react'
import './cart.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSelector,useDispatch } from 'react-redux';
import {createContext,useContext} from 'react'
import { ActionTypes } from '@mui/base';
import { deletetocart } from './store/action';
export function calculate(data){
     var price=0
  data.map((m)=>{
    price=price+m.price
  })
  return price
  }
const Cartcontext=createContext()
const Cart = () => {
  const cartData= useSelector((state)=>state.object.basket) 
  return (
    <div className='container-fluid mt-4 cart'>
      <div className='row'>
        <Cartcontext.Provider value={cartData}>
        <div className='col-md-9 bg-light cartlist order-2 order-md-2 order-lg-1'>       
                    <CartList__title/>
                    {
                      cartData.map((m)=>{
                        return(
                          <CartItem {...m}/>
                        )
                      })
                    }
                      <Subtotal/>
        </div>
        <Proceedtopay/>
        </Cartcontext.Provider>
      </div>
    </div>
  )
}
const CartList__title=()=>{
  const data=useContext(Cartcontext)
  return(
    <>
      {data.length?<div className='cartlist__title'>
                Shopping Cart
                <div className='cartlist__sub'>
                    <span>Deselect all items</span>
                    <span>Price</span>
                </div>     
            </div>:""}
    </>
  )
}
const Subtotal=()=>{
  const data=useContext(Cartcontext)
  var price=calculate(data)
  return(
    <>
      {data.length?<div className=' cartItem__subtotal'>
                  <h5>Subtotal ({data.length} item): <CurrencyRupeeIcon/>{price}</h5>
                </div>:
                <div><h3>Your Amazon cart is empty.</h3>
                <span>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.
Continue shopping on the Amazon.in homepage, learn about today's deals, or visit your Wish List.</span>
                </div>}
    </>
  )
}
const Proceedtopay=()=>{
  const data=useContext(Cartcontext)
  var price= calculate(data)
  return(
    <>
      {data.length?<div className='col mx-md-2 proceedtopay order-1 order-md-1 order-lg-2 p-0'>
         <div className='proceedtopay__box'>
             <div className=' p-2 proceedtopay__freedelivery'>
            <span><CheckCircleIcon/>  Your order is eligible for FREE Delivery.</span>
            <p className='text-dark ms-4'>Select this option at checkout. <a href="#">Details</a></p>
          </div>

          <div className='proceedtopay__Subtotal ms-3 '>
            <span>Subtotal ({data.length} item):<CurrencyRupeeIcon/>{price}</span>
             <div className='d-flex'>
                    <input type="checkbox"></input>
                    <span className='cartItem__desElegible text-dark m-1'>
                      This will be a gift.
                    </span>
                    <a href="#" className='cartItem__Learnmore m-1'>Learn More</a>
                  </div>
                  <button>Proceed to pay</button>
            </div>
         </div>
        </div>:""}
    </>
  )
}
const CartItem=(data)=>{  
  const dispatch=useDispatch()
  const dele=(data)=>{
    dispatch(deletetocart(data))
  }
  return(
    <>
      <div className='container cartItem'>
          <div className='row'>
            <div className='col-sm-9  cartItem__des'>
              <div className='d-flex flex-direction-column '>
                <div className='cartItem__img'><img src={data.img}></img></div>
              <div className='cartItem__description d-block'>
                  <div className='cartItem__descriptionTitle'>{data.title.slice(0,20)}</div>
                  <div className='cartItem__descriptionTitle d-md-none'><CurrencyRupeeIcon/> {data.price}</div>
                  <span className='cartItem__desinstock'>In Stock</span>
                  <h1 className='cartItem__desElegible'>
                    Eligible for shipping
                  </h1>
                  <img src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png'></img>
                  <div className='d-flex'>
                    <input type="checkbox"></input>
                    <span className='cartItem__desElegible text-dark m-1'>
                      This will be a gift.
                    </span>
                    <a href="#" className='cartItem__Learnmore m-1'>Learn More</a>
                  </div>
                  <div className='d-md-flex d-none'>
                    <select name="Quantity" className='cartItem__Quantity'>                    
                      <option value="1">Qty: 1</option>
                      <option value="1">Qty: 2</option>
                      <option value="1">Qty: 3</option>
                      <option value="1">Qty: 4</option>
                      <option value="1">Qty: 5</option>
                      <option value="1">Qty: 6</option>
                      <option value="1">Qty: 7</option>
                      <option value="1">Qty: 8</option>
                      <option value="1">Qty: 9</option>
                      <option value="1">Qty: 10+</option>
                    </select>
                    <button className='cartItem__btn' onClick={()=>dele(data)}>Delete</button>
                    <button className='cartItem__btn'>Save for later</button>
                    <button className='cartItem__btn' >See more like this</button>
                  </div>
              </div>
              </div>
              <div className='d-sm-flex d-md-none mt-2'>
                    <select name="Quantity" className='cartItem__Quantity'>
                    
                      <option value="1">Qty: 1</option>
                      <option value="1">Qty: 2</option>
                      <option value="1">Qty: 3</option>
                      <option value="1">Qty: 4</option>
                      <option value="1">Qty: 5</option>
                      <option value="1">Qty: 6</option>
                      <option value="1">Qty: 7</option>
                      <option value="1">Qty: 8</option>
                      <option value="1">Qty: 9</option>
                      <option value="1">Qty: 10+</option>
                    </select>
                    <button className='cartItem__btn' onClick={()=>dele(data)}>Delete</button>
                    <button className='cartItem__btn'>Save for later</button>
                    <button className='cartItem__btn' >See more like this</button>
                  </div>
            </div>
            <div className='col  cartItem__price '>
              <h5><CurrencyRupeeIcon/> {data.price}</h5>
            </div>
          </div>
      </div>
    </>
  )
}
export default Cart
