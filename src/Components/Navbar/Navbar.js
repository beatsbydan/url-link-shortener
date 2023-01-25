import './Navbar.css'
import '../../App.css'
import logo from '../../images/logo.svg'
import { useRef } from 'react'
import menu from '../../images/icon-menu.svg'
import close from '../../images/icon-close.svg'
import { useState } from 'react'
const Navbar = () => {
    const [navBtn, setNavBtn] = useState(menu)
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav');
        if(navBtn === menu){
            setNavBtn(close);
        }
        else{
            setNavBtn(menu)
        }
    }
    return (
        <div className="Navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav ref={navRef} className='flex'>
                <ul className='navs flex'>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
                <div className='buttons flex'>
                    <button><a href="#">Login</a></button>
                    <button><a href="#">Sign Up</a></button>
                </div>
            </nav>
            <button className='nav-btn' onClick={showNavBar}><img src={navBtn} alt="" /></button>
        </div>
      );
}
 
export default Navbar;