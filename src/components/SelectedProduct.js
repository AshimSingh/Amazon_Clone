import React, { useEffect } from 'react'
import "./SelectedProduct.css"
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useState,useContext,createContext} from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LockIcon from '@mui/icons-material/Lock';
import { useDispatch } from 'react-redux';
import {addtocart} from "./store/action";
import {useDetail} from "./useDetail"
const Product_Context =createContext()
const SelectedProduct = () => {
    const data=[
        'https://m.media-amazon.com/images/I/91ZynTSY-8L._SY450_.jpg',
        'https://m.media-amazon.com/images/I/81emEhg9gNL._SX425_.jpg',
        'https://m.media-amazon.com/images/I/816jJuRBJoL._SX425_.jpg',
        'https://m.media-amazon.com/images/I/61kpZPILnAL._SX425_.jpg',
        'https://m.media-amazon.com/images/I/61ZS0KLDXwL._SX425_.jpg'
    ]
    const {details,loading,error}=useDetail()
    const [mainImage,setMainImage]=useState("")
    useEffect(()=>{
      setMainImage(details.image)
    },[details])
    const changeMainImage=(m)=>{
        setMainImage(m)
    }
  return (
    <>
    
    <div className='container-fluid bg-light mt-4 pt-4'>
      <div className='container mb-4 selectedProduct'>
        {error?<h1>{error}</h1>:<></>}
      {loading?<h1>...Loading</h1>:<div className='row'>
        <SelectedProduct__image data={data} fun={changeMainImage} mainImage={mainImage} details={details}/>
        <Product_Context.Provider value={details}>
        <SelectedProduct__description/>
          <SelectedProduct__addtocart/>
        </Product_Context.Provider>
      </div>}
      
    </div>
    </div></>
  )
}
const SelectedProduct__addtocart=()=>{
  const dispatch =useDispatch()
  const data =useContext(Product_Context)
  const addProduct=(payload)=>{
    dispatch(addtocart(payload))
  }
  return(
    <>
      <div className='col-md-12 col-lg-3'>
        <div className='addtocart__box'>
          <h2><CurrencyRupeeIcon style={{fontSize:"15px",paddingTop:"4px"}}/>{data.price}<span>00</span></h2>
          <h6>FREE delivery <span>December 5 - 7. </span><a href='#'>Details</a></h6> 
          <h6><LocationOnIcon/><a href="#">Select delivery location</a></h6>
          <p>Sold and fulfilled by <a href='#'>MYSLEEPYHEAD.</a> </p>
          <h6>Quantity: <select>
            <option value="1"> 1</option>
            <option value="1"> 2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            </select></h6>
            <button className='addtocart__btn' onClick={()=>addProduct(data)}>Add to cart</button>
            <button className='addtocart__btn --buynow'>Buy Now</button>
            <p className='mt-2 m-b*2'><LockIcon/><a href="#">Secure transaction</a></p>
            <button className='addtocart__btn --wishList'>Add to wish List</button>
        </div>
      </div>
    </>
  )
}
const SelectedProduct__image=({data,fun,mainImage,details})=>{
  return(
    <>
     <div className='col-md-12 col-lg-4 selectedProduct__image m-0 p-0'>
            <img src={mainImage} alt='mainImage'></img>
            <div className='d-flex justify-content-center mt-2 selectedProduct__miniImage'>
                <img src={details.image} onMouseOver={()=>fun(details.image)} alt='mainImage'></img>
                {
                    data.map((m)=>{
                        return(
                                    <img src={m} onMouseOver={()=>fun(m)} alt="miniImage"></img>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

const SelectedProduct__description=()=>{
  const data = useContext(Product_Context)
  return(
    <>
      <div className='col-md-12 col-lg-5  p-0'>
        <div className='SelectedProduct__descriptionBox '>
          <h1>{data.title}</h1>
          <a href='#'>Visit the Sleepyhead Store</a>
          <div className='d-flex'>
              <StarIcon style={{color:"orange",fontSize:"18px"}}/>
              <StarIcon style={{color:"orange",fontSize:"18px"}}/>
              <StarIcon style={{color:"orange",fontSize:"18px"}}/>
              <StarIcon style={{color:"orange",fontSize:"18px"}}/>
              <StarIcon style={{color:"orange",fontSize:"18px"}}/>
              <div className='ms-4 '><a href="#">167 ratings</a></div>
          </div>
        </div>
        <SelectedProduct__priceBox/>
        
      </div>
    </>
  )
}
const SelectedProduct__priceBox=()=>{
  const data =useContext(Product_Context)
  return(
    <>
      <div className='SelectedProduct__descriptionBox '>
          <div className='SelectedProduct__price'>
            <span className='price__left'>-27%</span>
            <CurrencyRupeeIcon style={{fontSize:"12px"}}/>
            <h3>{data.price}</h3>
          </div>
          <div className='SelectedProduct__price'>
            <h5 className='price__left'>M.R.P: </h5>
            <CurrencyRupeeIcon style={{fontSize:"12px"}}/>
            <h5><s>420</s></h5>
          </div>
          <div className='SelectedProduct__price'>
            <h3>Inclusive of all taxes</h3>
          </div>
          <div className='SelectedProduct__price'>
            <h3 className='price__left'>EMI starts at ₹1,498. No Cost EMI available</h3>
            <a href="#">EMI option</a>
          </div>
        </div>
        <SelectedProduct__orderBox/>
    </>
  )
}
const SelectedProduct__orderBox=()=>{
  return(
    <>
      <div className='SelectedProduct__descriptionBox'>
        <div className='d-flex align-items-center'>
          <MonetizationOnIcon className='price__left' style={{fontSize:"45px",color:"rgb(237, 173, 54)"}}/>
          <h6>Offers</h6>
        </div>
        <div className='d-flex orderBox'>
          <div className='orderBox__offerBox'>
            <h6>No Cost EMI</h6>
            <p>
             Upto ₹1,991.73 EMI interest savings on select Credit Cards…
            <a href='#'>2 Offers... </a>
            </p>
            
          </div>
          <div className='orderBox__offerBox --bug'>
            <h6>Bank Offer</h6>
            <p>
             Upto ₹1,991.73 EMI interest savings on select Credit Cards…
             <a href='#'>Learn More... </a>
            </p>
          </div>
          <div className='orderBox__offerBox'>
            <h6>Cash Back</h6>
            <p>
             Upto ₹1,991.73 EMI interest savings on select Credit Cards…
             <a href='#'>4 Offers </a>
            </p>
          </div>
        </div>
      </div>
      <SelectedProduct__assuranceBox/>
    </>
  )
}
const SelectedProduct__assuranceBox=()=>{
  const data = useContext(Product_Context)
  return(
    <>
      <div className='SelectedProduct__descriptionBox'>
        <div className='d-flex mt-2 mb-2'>
          <div className='SelectedProduct__descriptionBoxMini'>
            <img src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png'></img>
            <a href='#'>10 days returnable</a>
          </div>
          <div className='SelectedProduct__descriptionBoxMini'>
            <img src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/amazon-verified._CB406968211_.png'></img>
            <a href='#'>Quality Verified</a>
          </div>
          <div className='SelectedProduct__descriptionBoxMini'>
            <img src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png'></img>
            <a href='#'>3 Years Warranty</a>
          </div>
        </div>

      </div>
      <div className='SelectedProduct__descriptionBox'>
        <div className='d-flex mt-2 mb-2'>
          <span>{data.description}</span>
        </div>
      </div>
    </>
  )
}
export default SelectedProduct
//onMouseOver={()=>changeMainImage(m)}
//src={mainImage}