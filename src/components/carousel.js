import React from 'react'
import Slider from "react-slick";

import './Carousel.css'
const Carousel = () => {
  const data=[
    "https://m.media-amazon.com/images/I/617Wo3jP3fL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/91-YIHP9I3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71ZQHw-dIIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61r0BhC7SYL._SX3000_.jpg",
  ]
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 4000,
      cssEase: "linear",
    }
  return (
    <>
      <div className='container-fluid'>
        <div className='Carousel__image margin' id='carosel'>
        {/* <img src="https://m.media-amazon.com/images/I/617Wo3jP3fL._SX3000_.jpg">
        </img> */}
          <Slider className='Slider' {...settings}>
            {data.map((m)=>{
          return(
            <img className='Sliderimg' src={m}alt="img"></img>
          )
            })}
            
          </Slider>
          
      </div>
      </div>
      
    </>
  )
}

export default Carousel
