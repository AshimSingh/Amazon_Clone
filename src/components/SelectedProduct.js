import React from 'react'
import "./SelectedProduct.css"
import {useState} from 'react'
const SelectedProduct = () => {
    const data=[
        'https://m.media-amazon.com/images/I/91ZynTSY-8L._SY450_.jpg',
        'https://m.media-amazon.com/images/I/81emEhg9gNL._SX425_.jpg',
        'https://m.media-amazon.com/images/I/816jJuRBJoL._SX425_.jpg',
        'https://m.media-amazon.com/images/I/61kpZPILnAL._SX425_.jpg',
        'https://m.media-amazon.com/images/I/61ZS0KLDXwL._SX425_.jpg'
    ]
    const [mainImage,setMainImage]=useState(data[0])
    const changeMainImage=(m)=>{
        setMainImage(m)
    }
  return (
    <div className='container bg-danger mt-4 mb-4 selectedProduct'>
      <div className='row'>
        <SelectedProduct__image data={data} fun={changeMainImage} mainImage={mainImage}/>
        <div className='col-md-5 bg-secondary'>des</div>
        <div className='col-md-3'>cart</div>
      </div>
      
    </div>
  )
}
const SelectedProduct__image=({data,fun,mainImage})=>{
  return(
    <>
     <div className='col-md-4 bg-primary selectedProduct__image m-0 p-0'>
            <img src={mainImage} alt='mainImage'></img>
            <div className='d-flex justify-content-center mt-2 selectedProduct__miniImage'>
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
  return(
    <>
      
    </>
  )
}
export default SelectedProduct
//onMouseOver={()=>changeMainImage(m)}
//src={mainImage}