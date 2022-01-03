import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../LogoImage';
import './header.css';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { MobileMenu } from './MobileMenu';

export default function Header () {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [header, setHeader] = useState();

  const showMobileMenu = () => setMobileMenu(!mobileMenu);
  const closeMobileMenu = () => setMobileMenu(false);

  const changeHeaderBg = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener('scroll', changeHeaderBg);

  return (
        <header className={header ? 'header active' : 'header'}>
            <IconContext.Provider value={{ color: '#fff' }} >
                <nav className='flex-between'>
                    <Link to='/' onClick={closeMobileMenu}>
                        <LogoImage />
                    </Link>
                    <Link to='#' className='menu-icon' onClick={showMobileMenu}>
                        {mobileMenu ? <FaIcons.FaTimes /> : <FaIcons.FaBars /> }
                    </Link>
                    <ul className='navigation flex-container'>
                        {MobileMenu.map((item, index) => {
                          return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} onClick={closeMobileMenu} className='mobile-links-space'>

                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                          );
                        })}
                    </ul>
                </nav>
                <nav className={mobileMenu ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-item' onClick={showMobileMenu}>
                        {MobileMenu.map((item, index) => {
                          return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path} onClick={closeMobileMenu} className='mobile-links-space'>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                          );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </header>
  );
}
