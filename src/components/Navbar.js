import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar(props) {

  function checkMenu() { 
    if(props.menuOn === false) { // first checks if the menu is on or off, then toggles the opposite
      props.toggleMenuIcon('Close')
      props.toggleMenu(true) 
    } // props.toggleMenu() was passed down from parent component App.js, it can change the state of menuOn in App.js
    else {
      props.toggleMenuIcon('Menu')
      props.toggleMenu(false)
    }
  }

  function closeMenu() {
    if(props.menuOn === true) {
      props.toggleMenuIcon('Menu')
      props.toggleMenu(false)
    }
  }

  return (

    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMenu}> {/* onClick function calls closeMenu above. Ensures that menu is closed when click on logo to return home. */}
          LOGO
        </Link>
        <div className='menu-icon' onClick={checkMenu}> {/* onClick function calls checkMenu above */}
          {props.menuIcon}
        </div>
      </div>
    </nav>

  )
}
