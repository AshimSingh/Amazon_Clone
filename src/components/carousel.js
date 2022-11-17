import React from 'react'
import './Carousel.css'
import ProductBox from './Product'
const Carousel = () => {
  const data=[
    "https://m.media-amazon.com/images/I/617Wo3jP3fL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/91-YIHP9I3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71ZQHw-dIIL._SX3000_.jpg"
  ]
  return (
    <>
      <div className='Carousel__image margin' id='carosel'>
        <img src="https://m.media-amazon.com/images/I/617Wo3jP3fL._SX3000_.jpg" alt="img"></img>
      </div>
    </>
  )
}

export default Carousel
