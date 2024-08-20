import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/styling/navbar.scss';
import Logo from '../assets/navbar/serendipity-logo.png';
import Burger from '../assets/navbar/burger.png';


export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
      <nav id="navbar">
        <img src={Logo} alt='logo' className='logo'/>
        <div className='navbarDesktop'>
          <Link className='navbarDesktopLink' to='../About'>About</Link>
          <Link className='navbarDesktopLink' to='../Jobs'>Jobs</Link>
          <Link className='navbarDesktopLink' to='../Blog'>Blog</Link>
          <Link className='navbarDesktopLink' to='../Contact'>Contact</Link>
          <Link className='navbarDesktopLink' to='../'>Home</Link>
        </div>

        <img src={Burger} alt='burgerMenu' className='burgerMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className='navMenu' style={{display: showMenu ? 'flex':'none'}}>
          <div className='navMenuLinksContainer'>
            <Link className='navMenuLink' onClick={()=>setShowMenu(false)} to='../About'>About</Link>
            <Link className='navMenuLink' onClick={()=>setShowMenu(false)} to='../Jobs'>Jobs</Link>
            <Link className='navMenuLink' onClick={()=>setShowMenu(false)} to='../Blog'>Blog</Link>
            <Link className='navMenuLink' onClick={()=>setShowMenu(false)} to='../Contact'>Contact</Link>
            <Link className='navMenuLink' onClick={()=>setShowMenu(false)} to='../'>Home</Link>
          </div>
        </div>
    </nav>
  )
}
