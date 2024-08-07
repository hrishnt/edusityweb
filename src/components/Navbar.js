import React, { useEffect, useState } from 'react'
import './NavbarStyles.css'
import logo from '../assests/logo.png'
import menuicon from "../assests/menu-icon.png"

export default function Navbar() {

  const [sticky, setSticky] =useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  const [hidemenu,SetHidemenu]=useState(false);
  const toggleMenu=()=> {
    hidemenu ? SetHidemenu(false) : SetHidemenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'darknav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={hidemenu ? '':'hidemenumob' }>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
      <img src={menuicon} alt="" className='menuicon' onClick={toggleMenu}/>
    </nav>
  )
}
