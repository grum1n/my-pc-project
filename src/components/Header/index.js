import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../LogoImage';
import ImgLogo from '../../images/CarPlogo.png'
import './header.css';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Menu } from './Menu';

export default function Header () {
  const [menu, setMenu] = useState(false);
  const [header, setHeader] = useState();

  const showMobileMenu = () => setMenu(!menu);
  const closeMobileMenu = () => setMenu(false);

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
                    <LogoImage url={ImgLogo} title='logo' cName='logo-style' />
                    </Link>
                    <Link to='#' className='menu-icon' onClick={showMobileMenu}>
                        {menu ? <FaIcons.FaTimes /> : <FaIcons.FaBars /> }
                    </Link>
                    <ul className='navigation flex-container'>
                        {Menu.map((item, index) => {
                          return (
                                <li key={index} className={item.style}>
                                    <Link to={item.path} onClick={closeMobileMenu}>

                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                          );
                        })}
                    </ul>
                </nav>
                <nav className={menu ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-item' onClick={showMobileMenu}>
                        {Menu.map((item, index) => {
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
