import React from 'react';
import {FaSistrix} from "react-icons/fa"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__first'>
    <div className='navbar__first-logo'>
      <img src="/images/instagramLogo.png" alt=""/>
      
    </div>
      </div>


      <div className='navbar__middle'>
      <div className='navbar__middle-search'>
        <input type="tex" className='navbar__search' placeholder='Search' />
        <FaSistrix className='searchIcon' />
      </div>
      </div>


      <div className='navbar__last'>

      </div>
    </div>
  )
}

export default Navbar
