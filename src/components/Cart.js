import React from 'react'
import './cart.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const Cart = () => {
  return (
    <div className='container-fluid mt-4 cart'>
      <div className='row'>
        <div className='col-md-9 bg-light cartlist order-2 order-md-2 order-lg-1'>
                  <CartList__title/>
                  <CartItem/>
                  <CartItem/>
                  <Subtotal/>

        </div>
        <Proceedtopay/>
      </div>
    </div>
  )
}
const CartList__title=()=>{
  return(
    <>
      <div className='cartlist__title'>
                Shopping Cart
                <div className='cartlist__sub'>
                    <span>Deselect all items</span>
                    <span>Price</span>
                </div>     
            </div>
    </>
  )
}
const Subtotal=()=>{
  return(
    <>
      <div className=' cartItem__subtotal'>
                  <h5>Subtotal (1 item): <CurrencyRupeeIcon/> 3999</h5>
                </div>
    </>
  )
}
const Proceedtopay=()=>{
  return(
    <>
      <div className='col mx-md-2 proceedtopay order-1 order-md-1 order-lg-2 p-0'>
         <div className='proceedtopay__box'>
             <div className=' p-2 proceedtopay__freedelivery'>
            <span><CheckCircleIcon/>  Your order is eligible for FREE Delivery.</span>
            <p className='text-dark ms-4'>Select this option at checkout. <a href="#">Details</a></p>
          </div>

          <div className='proceedtopay__Subtotal ms-3 '>
            <span>Subtotal (1 item):<CurrencyRupeeIcon/>625.00</span>
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

        </div>
    </>
  )
}
const CartItem=()=>{
  return(
    <>
      <div className='container cartItem'>
          <div className='row'>
            
            <div className='col-sm-9  cartItem__des'>
              <div className='d-flex flex-direction-column '>
                <img className='cartItem__img' src='https://m.media-amazon.com/images/I/71Nhcr5zIfL._AC_AA180_.jpg'></img>
              <div className='cartItem__description d-block'>
                  <div className='cartItem__descriptionTitle'>Drools Adult(+1 year) Dry Cat Food, Ocean Fish, 3 kg + 1.2…</div>
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
                    <button className='cartItem__btn'>Delete</button>
                    <button className='cartItem__btn'>Save for later</button>
                    <button className='cartItem__btn' >See more like this</button>
                  </div>
              </div>
              </div>
              <div className='d-sm-flex d-md-none'>
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
                    <button className='cartItem__btn'>Delete</button>
                    <button className='cartItem__btn'>Save for later</button>
                    <button className='cartItem__btn' >See more like this</button>
                  </div>
            </div>
            <div className='col  cartItem__price '>
              <h5><CurrencyRupeeIcon/> 3999</h5>
            </div>
          </div>
      </div>
    </>
  )
}
export default Cart
