import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
  return (
    <div className='header'>
      
        <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' className='header__imgLogo'></img>
      

      <div className='header__search'>
        <input type="text"></input>
        <SearchIcon/>
      </div>

      <div className='header__nav'>

        <div className='header__navItem'>
          <div className='header__ItemPrefix'>
            Hello
        </div>
        <div className='header__ItemSuffix'>
          SignIN
        </div>
        </div>

        <div className='header__navItem'>
          <div className='header__ItemPrefix'>
            Returns
        </div>
        <div className='header__ItemSuffix'>
          & Orders
        </div>
        </div>

        <div className='header__navItem'>
          <div className='header__ItemPrefix'>
            Your
        </div>
        <div className='header__ItemSuffix'>
          Prime
        </div>
        </div>

      </div>

    </div>
  )
}

export default Header
