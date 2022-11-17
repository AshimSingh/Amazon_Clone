import React from 'react'
import './Header.css'
import Drawer from './Drawer'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom'
const Header = () => {
  const menu=()=>{
      const drawer = document.querySelector('.drawer')
      drawer.style.display ="block"
      const cover=document.querySelector('.header__cover')
      cover.style.display="inline-block"
      console.log("menu")
  }
  const close_Menu=()=>{
    const cover=document.querySelector('.header__cover')
      cover.style.display="none"
    const drawer = document.querySelector('.drawer')
    drawer.style.display ="none"
  }
  return (
    <>
    <div className='header__cover' onClick={()=>{close_Menu()}}>
      <div className='header__closeBtn'>
        <CloseIcon fontSize="large" onClick={close_Menu} />
      </div>
    </div>

     
      <div className='header' id='header'>
     <div className='header__showBox'>
       <MenuIcon className='header__menu' onClick={menu}/>
        <Link className='link' to='/'>
          <div className='box box--img'><img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amozon-logo' className='header__imgLogo'></img></div>
        </Link>
     </div>

      <div className='header__navItem box'>
          <div className='header__ItemPrefix'>
            Hello
        </div>
        <div className='header__ItemSuffix'>
          Select your address
        </div>
      </div>
      <div className='header__search'>
        <select className='header__select'>
          <option value="All">All</option>
          <option value="All">Alexa Skills</option>
          <option value="All">Amazon Device</option>
          <option value="All">Amazon Fresh</option>
          <option value="All">Amazon Fashion</option>
        </select>
        <input type="text"
          // onChange={handelSearch}
        ></input>
        <button className='header__searchIcon'><SearchIcon/></button>
        {/* <SearchIcon className='header__searchIcon'/> */}
       </div>

      <div className='header__nav'>
        <div className='header__navItem box'>
          <div className='header__ItemPrefix'>
            English
        </div>
        <div className='header__ItemSuffix'>
          
        </div>
        </div>


        <div className='header__navItem box show impshow'>
          <div className='header__ItemPrefix'>
            Hello SignIN
        </div>
        <div className='header__ItemSuffix'>
          Accounts & Lists
        </div>
        </div>

        <div className='header__navItem box'>
          <div className='header__ItemPrefix'>
            Returns
        </div>
        <div className='header__ItemSuffix'>
          & Orders
        </div>
        </div>

        <div className='header__navItem box'>
          <div className='header__ItemPrefix'>
            Your
        </div>
        <div className='header__ItemSuffix'>
          Prime
        </div>
        </div>
        <Link className='link' to="/cart">
          <div className='header__navItem box show impshow'>
          <div className='header__ItemPrefix'>
            0
        </div>
          <dvi className='header__ItemSuffix'><ShoppingCartOutlinedIcon/> Cart</dvi>
        </div>
        </Link>
      </div>
    
    </div> 
    
    
    <div className='header__mobileview show'>
      <div className='header__search show'>
        <input type="text" placeholder='Search your product here'
        >
        </input>
        <button className='header__searchIcon'><SearchIcon/></button>
      </div>
    </div>
    <div className='header__mobileview show'>
      <div className='header__show'>
        <div className='header__navItem box show'>
          <div className='header__ItemPrefix'>
            Shop By
        </div>
          <dvi className='header__ItemSuffix'>Catogery</dvi>
        </div>

        <div className='header__navItem box show'>
          <dvi className='header__ItemSuffix'>Wish List</dvi>
        </div>

        <div className='header__navItem box show'>
          <dvi className='header__ItemSuffix'>Deals</dvi>
        </div>

        <div className='header__navItem box show'>
          <dvi className='header__ItemSuffix'>Sell</dvi>
        </div>

      </div>
    </div>

        <div className='header__mobileview show header__selectloaction'>
            <div className='header__ItemPrefix'>
            <LocationOnIcon/>
            Select delivery loaction
        </div>
        </div>

        <div className='header__secondnav'>
        </div>    
    <Drawer/>
    </>
  )
}

export default Header
