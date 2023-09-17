import { Link } from 'react-router-dom';
import '../components/styling/navbar.scss';
import Logo from '../assets/logo.png';


export default function Navbar() {
  return (
      <nav className="navbar">
        <img src={Logo} alt='logo' className='logo'/>
        <div className='navbarDesktop'>
          <Link className='navbarDesktopLink' to='../About'>About</Link>
          <Link className='navbarDesktopLink' to='../Blog'>Blog</Link>
          <Link className='navbarDesktopLink' to='../Contact'>Contact</Link>
          <Link className='navbarDesktopLink' to='../'>Home</Link>
        </div>
    </nav>
  )
}
