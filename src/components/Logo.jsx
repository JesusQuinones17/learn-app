import LogoImage from '../assets/Logo.png'

import '../styles/Logo.scss'

function Logo() {
  return (
    <div className='logo-container'>
      <figure>
        <img
          className='logo-image' 
          src={LogoImage}
          alt='Logo'
          width={50}
        />
        <figcaption className='logo-text'>learn</figcaption>
      </figure>
    </div>
  )
}

export default Logo
