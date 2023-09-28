import React from 'react'
import './Navbar.css'
import { avatar, logo } from '../../constants/urls'


function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt="logo loading" />
         <img className='avatar' src={avatar} alt="loading " />
         <div className='icons'>
         <i className="fas fa-times"></i> 
         </div>
         <div className='icon'>
         <i className="fas fa-map-marker-alt"></i>
         </div>
    </div>
  )
}

export default Navbar