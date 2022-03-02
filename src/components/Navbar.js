import React from 'react'
import '../Styling/Navbar.css'
import Hamburger from './Hamburger'

const Navbar = ({setCategory}) => {
     return (
          <div className="nav">
               <div className="icon"><Hamburger setCategory={setCategory}/></div>
               <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo" />
          </div>
     )
}

export default Navbar
