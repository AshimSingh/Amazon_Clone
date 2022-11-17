import React from 'react'
import './cart.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Cart = () => {
  return (
    <div className='container-fluid mt-4 cart'>
      <div className='row'>
        <div className='col-sm-9 bg-light cartlist'>
            <div className='cartlist__title'>
                Shopping Cart
                <div className='cartlist__sub'>
                    <span>Deselect all items</span>
                    <span>Price</span>
                </div>
                <CartItem/>
                  <CartItem/>
                
            </div>
        </div>
        <div className='col mx-2 bg-danger proceedtopay'>
            world
        </div>
      </div>
    </div>
  )
}
const CartItem=()=>{
  return(
    <>
      <div className='container cartItem'>
          <div className='row'>
            
            <div className='col-sm-9 d-flex flex-direction-column  cartItem__des'>
              <img src='https://m.media-amazon.com/images/I/71Nhcr5zIfL._AC_AA180_.jpg'></img>
              <div className='cartItem__description d-block'>
                  <h6>Drools Adult(+1 year) Dry Cat Food, Ocean Fish, 3 kg + 1.2…</h6>
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
                  <div className='d-flex'>
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
            <div className='col  cartItem__price '>
              <span><CurrencyRupeeIcon/> 3999</span>
            </div>
          </div>
      </div>
    </>
  )
}
export default Cart
