import React from 'react'
import './ProductBox.css'
import { Link } from 'react-router-dom'
const ProductBox = (response) => {
  return (
    <div className='ProductBox col-md-3'>
      <div className='productBox__title'>
        {/* Shop & Pay | Earn rewards daily */}
        {response.title}
      </div>
      <div className='productBox__images'>

        {/* {Object.keys(response).map((m)=>{
          return(
            <ProductBox__card {...response[m]}/>
          )
        })} */}

        {/* <ProductBox__card/>
        <ProductBox__card/>
        <ProductBox__card/>     */}
        {/* <ProductBox__card/> */}
        {
          response.resp.map((m)=>{
            return(
              <ProductBox__card {...m}/>
            )
          })
        }
        
        <div className='productbox__clouser'>
            <a href='#'>See more</a>
          </div>
        </div>
      </div>
 )
}
export default ProductBox
function ProductBox__card(data){
  return(
    <>
    
      <div className='productBox__imageBox'>
         <Link to={`/product/${data.id}`}> 
          <img className='productBox_image' src={data.image}
          // {response.image}
          alt='images'></img>
          </Link>
          <div className='productBox__productdetails'>
            {/* {response.title.slice(0,20)} ... */}
            {data.title.slice(0,20)}
          </div>
         
        </div>
        </>
  )
}

