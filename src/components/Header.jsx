import { Link } from 'react-router-dom'

import Logo from '../components/Logo'

import '../styles/Header.scss'
import React from 'react'

function Header() {
  return (
    <header>
        <Logo />
        <nav className='header-menu'>
            <Link to='/blog' className='header-menu-item'>Blog</Link>
            <Link to='/pricing' className='header-menu-item'>Pricing</Link>
            <Link to='/features' className='header-menu-item'>Features</Link>
        </nav>
    </header>
  )
}

export default Header
