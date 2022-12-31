import React from 'react'
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-container'>
        <div className='ig-icon-container'>
          <a className='link-to-ig' href='https://www.instagram.com/milliken_sac/?hl=en'>
            <InstagramIcon className='ig-icon' />
          </a>
        </div>
        <div className='git-icon-container'>
          <a className='link-to-repo' href='https://github.com/brianzhu31/mmhs-info'>
            <GitHubIcon className='git-icon' />
          </a>
        </div>
      </div>
    </div>
  )
}
