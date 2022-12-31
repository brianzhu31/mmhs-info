import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Menu.css'

export default function Menu(props) {

  function checkMenu() { 
    if(props.menuOn === false) { // first checks if the menu is on or off, then toggles the opposite
      props.toggleMenu(true)
      props.toggleMenuIcon('Close')
    } // props.toggleMenu() was passed down from parent component App.js, it can change the state of menuOn in App.js
    else {
      props.toggleMenu(false)
      props.toggleMenuIcon('Menu')
    }
  }

  return (
    <div className={props.menuOn ? 'menu' : 'menu-off'}>  {/* toggles between two classes based on menuOn state in App.js */}
      <div className='menu-list-container'>
        <div className={props.menuOn ? 'menu-list-item' : 'menu-list-item-off'} onClick={checkMenu}> {/* toggles between two classes based on menuOn state in App.js */}
          <Link className='menu-link' to='/'>
            <p className='menu-list-text'>Home</p>
          </Link>
        </div> 
        <div className={props.menuOn ? 'menu-list-item' : 'menu-list-item-off'}>
          <p className='menu-list-text' id='menu-list-text-activities'>Activities</p>
          <ul id='activities-dropdown-container'>
            <li className='menu-dropdown-item'>
              <Link className='menu-link' to='clubs' onClick={checkMenu}>
                <p className='menu-list-text'>Clubs</p>
              </Link>
            </li>
            <li className='menu-dropdown-item'>
              <Link className='menu-link' to='athletics' onClick={checkMenu}>
                <p className='menu-list-text'>Athletics</p>
              </Link>
            </li>
            <li className='menu-dropdown-item'>
              <Link className='menu-link' to='events' onClick={checkMenu}>
                <p className='menu-list-text'>Events</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={props.menuOn ? 'menu-list-item' : 'menu-list-item-off'}>
          <p className='menu-list-text' id='menu-list-text-about'>About</p>
          <ul id='about-dropdown-container'>
            <li className='menu-dropdown-item'>
              <Link className='menu-link' to='our-school' onClick={checkMenu}>
                <p className='menu-list-text'>Our School</p>
              </Link>
            </li>
            <li className='menu-dropdown-item'>
              <Link className='menu-link' to='ib-program' onClick={checkMenu}>
                <p className='menu-list-text'>IB Program</p>
              </Link>
            </li>
            <li className='menu-dropdown-item'>
              <Link className='menu-link' to='shsm' onClick={checkMenu}>
                <p className='menu-list-text'>SHSM</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={props.menuOn ? 'menu-list-item' : 'menu-list-item-off'} onClick={checkMenu}>
          <Link className='menu-link' to='contact'>
            <p className='menu-list-text'>Contact</p>
          </Link>
        </div>
        <div className={props.menuOn ? 'menu-list-item' : 'menu-list-item-off'} onClick={checkMenu}>
          <Link className='menu-link' to='our-team'>
            <p className='menu-list-text'>Our Team</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
