import React from 'react'
import Carousel from '../components/carousel'
import Catogerylist from '../components/Catogerylist'
import Backtotop from '../components/backtotop'
import ProductSlider from '../components/ProductSlider'
const Home = () => {
  return (
    <div>      
      <Carousel/>
      <Catogerylist/>
      <ProductSlider/>
      <Backtotop/>
    </div>
  )
}

export default Home
