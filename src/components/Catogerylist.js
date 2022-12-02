import React from 'react'
import ProductBox from './Product'
import"./ProductBox.css"
import {useFetch} from "../components/store/useFetch"
import { useSelector } from 'react-redux'
const Catogerylist = () => {
  const {response,error} =useFetch("https://fakestoreapi.com/products/category/jewelery")
  const{electronics,eleerror}=useFetch("https://fakestoreapi.com/products/category/electronics")
  const {mensClothing,merror}=useFetch("https://fakestoreapi.com/products/category/men's clothing")
  const{womensClothing,werror}=useFetch("https://fakestoreapi.com/products/category/women's clothing")
   const data =[
    {
        id:15,
        image:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg",
        title:"Claim your scrach cards",
      },
       {
        id:20,
        image:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg",
        title:"Reedom your collected reward",
      },
       {
        id:22,
        image:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg",
        title:"Reedom your collected reward",
      },
       {
        id:23,
        image:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg",
        title:"Reedom your collected reward",
      },
  ]
  return (
    <>
    <div className='container-fluid'>
        <div className='row margin d-flex justify-content-center'>
          
          <ProductBox resp={response} title={"Keep Shopping for"}></ProductBox>
          <ProductBox resp={electronics.slice(0,4)} title={"Your Favriote Electronics"}></ProductBox>
          <ProductBox resp={data} title={"Shop & Pay | Earn rewards daily"}></ProductBox>
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
           <ProductBox resp={mensClothing.slice(0,4)} title={"Look Stylish this Winter"} className="ProductBox__hide1"/>
          <ProductBox className="ProductBox__hide" resp={womensClothing.slice(2,6)} title={"Redesign Your Wardrobe"}/> 
          
        
        </div>
        
      </div>
    </>
  )
}

export default Catogerylist
