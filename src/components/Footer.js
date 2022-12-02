import React from 'react'
// import "./Footer.scss"
import "./Footer.css"
const Footer = () => {
  const data=[
    {
      title:"Get to know us",
      sub:["About us","Career","Press Release","Amazon Science"]
    },
    {
      title:"Connect with us",
      sub:["Facebook","Instagram","Twitter"]
      // sub:{name:"ashim",address:"aus"}
    },
    {
      title:"Make money with us",
      sub:["Sell on Amazon","Sell under Amazon Accelator","Amazon Global Selling","Become an Affilate","Fulfillemnt by Amazon","Advertise your product","Amazon pay on Merchants"]
    },
    {
      title:"Let us help you",
      sub:["Covid-19 and Amazon","Your Accounts","Returns Center","100% Purchase Protection","Amazon App Download","Amazon Assistance Download","Help"]
    },

  ]
  return (
    <>
       <div className='container-fluid footer__container d-flex align-items-center'>
          <div className='container text-light mt-3' >
          <div className='row'>
          
            {
            data.map((m)=>{
              return(
                <Footer__content {...m} />
              )
            })
          }
          
          </div>
          </div>
       </div>
    </>
  )
}
const Footer__content=({title,sub})=>{
      return(
        <>
          <div className='col-md-3 col-6 mt-2'>
            <div className='footer__title'>
                {title}
              </div>
              <div className='footer__subtitle'>
                {
                  sub.map((m)=>{
                    return(
                      <a href='https://www.instagram.com/ashim_singh_thapa/'><span>{m}</span></a>
                    )
                  })
                }
              </div>
          </div>
        </>
      )
}

export default Footer