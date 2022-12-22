import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return (

    <div className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          MMHS
        </Link>
        <div className='menu-icon'>
          Menu
        </div>
      </div>
    </div>

  )
}
