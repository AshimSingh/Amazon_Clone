import React from 'react'
import './ProductBox.css'
const ProductBox = () => {
  const data =[
    {
        url:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg",
        des:"Claim your scrach cards",
      },
       {
        url:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg",
        des:"Reedom your collected reward",
      },
       {
        url:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg",
        des:"Reedom your collected reward",
      },
       {
        url:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg",
        des:"Reedom your collected reward",
      },
  ]
  // const data=[
  //   {
  //     title:'Keep shopping for',
  //     image:[
  //       {
  //       url:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg",
  //       des:"Claim your scrach cards",
  //     },
  //      {
  //       url:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg",
  //       des:"Reedom your collected reward",
  //     },
  //      {
  //       url:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg",
  //       des:"Reedom your collected reward",
  //     },
  //      {
  //       url:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg",
  //       des:"Reedom your collected reward",
  //     },
  //   ]
  //   }
  // ]
  return (
    <div className='ProductBox col-md-3'>
      <div className='productBox__title'>
        Shop & Pay | Earn rewards daily
      </div>
      <div className='productBox__images'>
        {/* <ProductBox__card/>
        <ProductBox__card/>
        <ProductBox__card/>
        <ProductBox__card/>     */}
        {
          data.map((m)=>{
            return(
              <ProductBox__card/>
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
function ProductBox__card(){
  return(
    <div className='productBox__imageBox'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg'
          alt='images'></img>
          <div className='productBox__productdetails'>
            Claim your scratch cards
          </div>
        </div>
  )
}

