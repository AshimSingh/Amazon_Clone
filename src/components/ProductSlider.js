import React from 'react'
import './ProductSlider.css'
import Slider from "react-slick";
import { useFetch } from './store/useFetch';
import { Link } from 'react-router-dom';
const ProductSlider = () => {
  const settings={
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      nextArrow:<NextArrow/>,
      prevArrow:<NextArrow/>
  }
  const {sliderProduct,serror}=useFetch("https://fakestoreapi.com/products")
  return (
    <div className='Container-fluid d-flex justify-content-center mb-5'>
        <div className='pSlider'>
        <h3 className='margin mt-2'>Today's Deal</h3>
       <Slider className='margin' {...settings}>
        {
          // [...Array(10)].map((m)=>{
          //   return(
          //     <Pslider__box/>
          //   )
          // })
          sliderProduct.slice(0,10).map((m)=>{
            return(
              <Pslider__box {...m}/>
            )
          })
        }
        {/* <Pslider__box/> */}
       </Slider>
    </div>
    </div>
  )
}
const Pslider__box=(data)=>{
  return(
    <div className='Pslider__box'>
     <Link className='link' to={`/product/${data.id}`}>
         <div className='Pslider__img'>
        <img src={data.image}></img>
      </div>
      <div className="Pslider__dis">
        <span>Up to 50% off</span>
        <p>Deal of the day</p>
      </div>
      <p>{data.title.slice(0,20)}</p>
     </Link>
    </div>
  )
}
const NextArrow=(props)=>{
  const { className, style, onClick } = props;
  return(
    <div className={className} style={{...style,backgroundColor:"black",height:'50px',display:'flex',alignItems:'center'}} onClick={onClick}>
    </div>
  )
}
export default ProductSlider
