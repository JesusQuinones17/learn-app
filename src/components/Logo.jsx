import LogoImage from '../assets/Logo.png'
import { Link } from 'react-router-dom'

import '../styles/Logo.scss'

function Logo() {
  return (
    <div className='logo-container'>
      <Link to='/'>
        <figure>
          <img
            className='logo-image' 
            src={LogoImage}
            alt='Logo'
          />
          <figcaption className='logo-text'>learn</figcaption>
        </figure>
      </Link>
    </div>
  )
}

export default Logo
