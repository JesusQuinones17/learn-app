import LogoImage from '../assets/Logo.png'


function Logo() {
  return (
    <div>
      <figure>
        <img src={LogoImage} alt='Logo' width={50} />
        <p>learn</p>
      </figure>
    </div>
  )
}

export default Logo
