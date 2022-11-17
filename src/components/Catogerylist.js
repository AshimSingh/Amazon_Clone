import React from 'react'
import ProductBox from './Product'
import"./ProductBox.css"
const Catogerylist = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row margin d-flex justify-content-center'>
          <ProductBox/>
          <ProductBox/>
          <ProductBox/>
          <div className='ProductBox  col-md-3  ProductBox__adsBox'>
            <div className='ProductBox__message'>
                <div className='productBox__title '>
                    Shop on the Amazon App
                </div>
                <p className='margin'>
                    Fast, convenient and secure | Over 17 crore products in your pocket
                </p>
                <div className='productbox__clouser'>
            <a href='#'>Download the amazon app</a>
          </div>
            </div>
            <div className='PrdoductBox__ads'>
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/74da3746314261.584fd9b657f39.png'></img>
            </div>
          </div>
          <div className='primeBox  col-md-6'>
            <img src='https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/04cf183ac9be2a6306af01d5ee82eadac03ad1942eb99dda669af28c56d80322._RI_V_TTW_QL40_AC_SL792_.jpg'></img>
          </div>
          <ProductBox className="ProductBox__hide1"/>
          <ProductBox className="ProductBox__hide"/>
          
        
        </div>
        
      </div>
    </>
  )
}

export default Catogerylist
