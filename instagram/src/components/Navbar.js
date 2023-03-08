import React from 'react';
import {FaRegCompass, FaRegHeart, FaSistrix, FaTelegramPlane} from "react-icons/fa"
import {MdHome} from "react-icons/md"
import {ContextProvider} from "../Global/Context"

const Navbar = () => {
  const {model, openModel} = React.useContext(ContextProvider)
  console.log("my model", model);
  const openForms = () => {
    openModel();
  }
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
     <li>
      <MdHome className="navbar_icons"/>
     </li>
     <li>
      <FaTelegramPlane className="navbar_icons"/>
     </li>
     <li>
      <FaRegCompass className="navbar_icons"/>
     </li>
     <li>
      <FaRegHeart className="navbar_icons"/>
     </li>
     <li onClick={openForms}>Register/Login </li>
      </div>
    </div>
  )
}

export default Navbar
