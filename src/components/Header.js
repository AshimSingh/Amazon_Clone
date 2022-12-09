import React from 'react'
import './Header.css'
import Drawer from './Drawer'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import {useSelector,useDispatch} from 'react-redux'
import { useState } from 'react';
import app from '../fire';
import { useSearch } from './store/useSearch';
const Header = () => {
  const [search,setSearch]=useState('')
  const {searchItem}=useSearch('')
  const auth=getAuth(app)
  const user=useSelector((state)=>state.object.user)
  const dispatch=useDispatch()
  const object = useSelector((state)=>state.object)
  const searchbar=document.querySelector('.header__search1')
  const searchbox=document.querySelector('.header__searchBox')
  const cover=document.querySelector('.header__cover')
  const searchboxmob=document.querySelector('.searchBox__mov')
  const mobileSearchbox=(e)=>{
    e.preventDefault()
    setSearch(e.target.value)
    searchboxmob.style.display='inline-block'
    cover.style.display='inline-block'
  }
  const searchBox=(e)=>{
    e.preventDefault()
    setSearch(e.target.value)
      cover.style.display="inline-block"
      // const searchbar=document.querySelector('.header__search1')
      // const searchbox=document.querySelector('.header__searchBox')
      searchbar.style.top='200px'
      searchbox.style.display='inline-block'
  }
  
  const menu=()=>{
      const drawer = document.querySelector('.drawer')
      drawer.style.display ="block"
      const cover=document.querySelector('.header__cover')
      cover.style.display="inline-block"
  }
  const close_Menu=()=>{
    const cover=document.querySelector('.header__cover')
      cover.style.display="none"
    const drawer = document.querySelector('.drawer')
    drawer.style.display ="none"
    searchbar.style.top='0px'
    searchbox.style.display='none'
    searchboxmob.style.display='none'
  }
  const Signout=()=>{
    if(user){
      signOut(auth).then(() => {
  // Sign-out successful.
  dispatch({
    type:"ADD_USER",
    data:null
  })
  alert("Sign out sucessfull")
}).catch((error) => {
  // An error happened.
  alert(error)
});
    }
    else{
      
    }
  }
  // console.log("Url is ",url)
  return (
    <div>
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
      <div className='header__search1'>
        <div className='header__search'>
          <select className='header__select'>
          <option value="All">All</option>
          <option value="All">Alexa Skills</option>
          <option value="All">Amazon Device</option>
          <option value="All">Amazon Fresh</option>
          <option value="All">Amazon Fashion</option>
        </select>
          <input type="text"
            placeholder='Search Products'
            value={search}
            onChange={searchBox}
            onClick={searchBox}
          ></input>
        <button className='header__searchIcon'><SearchIcon/></button>
        </div>
        <div className='header__searchBox'>
          {
          searchItem.filter((value)=>{
            if(search===""){
              return value
            }
            else if(value.title.toLowerCase().includes(search.toLowerCase())){
              return value
            }
          }).map((item)=>{
            return(
              <SearchBox {...item} close={close_Menu} />
            )
          })
          }
          </div>
     
       </div>
      <div className='header__nav'>
        <div className='header__navItem box'>
          <div className='header__ItemPrefix'>
            English
        </div>
        <div className='header__ItemSuffix'>
          
        </div>
        </div>

        <Link to={!user&& "/signin" }>
        <div className='header__navItem box show impshow'>
          
            <div className='header__ItemPrefix'>
            Hello {user?user.displayName.slice(0,8)+"...":"Guest"}
           {/* {user.displayName?user.displayName.slice(0,8):"Guest"} */}
            </div>          
          
        <div className='header__ItemSuffix' onClick={()=>Signout()}>
          {/* Accounts & Lists */}
          {user?"Sign Out":"Sign In"}
        </div>
        </div>
        </Link>
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
            {object.basket.length}
            {/* {basket.state.basket.length} */}
            {/* {basket.length} */}
        </div>
          <dvi className='header__ItemSuffix'><ShoppingCartOutlinedIcon/> Cart</dvi>
        </div>
        </Link>
      </div>
    
    </div> 
    <div className='header__mobileview'>
      
      <div className='header__search show'>
        <input type="text" placeholder='Search your product here'
        value={search}
        onClick={mobileSearchbox}
        onChange={mobileSearchbox}
        >
        </input>
        <button className='header__searchIcon'><SearchIcon/></button>
      </div>
      {/* <div className='header__searchBox'>hello</div> */}
      <div className='searchBox__mov'>
        {searchItem.filter((value)=>{
          if(search===""){
            return value
          }
          else if(value.title.toLowerCase().includes(search.toLowerCase())){
            return value
          }
        }).map((m)=>{
          return(
            <SearchBox {...m} close={close_Menu} />
          )
        })}
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
    <Drawer close_menu={close_Menu} signOut={Signout}/>
    </div>
  )
}
const SearchBox=({id,image,description,title,close})=>{
  return(
    <Link className='link' to={`/product/${id}`} onClick={close} >
      <div className='search__tiles'>
      <img src={image}></img>
      <div className='tiles__des'>
        <h5>{title.slice(0,20)}</h5>
        <h6>{description.slice(0,100)}</h6>
      </div>
    </div>
    </Link>
  )
}

export default Header
