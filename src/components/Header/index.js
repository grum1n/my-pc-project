import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../LogoImage';
import './header.css';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import { MobileMenu } from './MobileMenu';

const Header = () => {
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
                        <Link to='#' className='menu-icon'>
                            <FaIcons.FaBars onClick={showMobileMenu} />
                        </Link>
                    <ul className='navigation flex-container'>
                        <li>
                            <Link to='/'>
                                Pagrindinis
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                Apie mus
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                Laužynai
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                Kontaktai
                            </Link>
                        </li>
                        <li>
                            <Link to='/login' className='active'>
                                Prisijungti
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav className={mobileMenu ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-item' onClick={showMobileMenu}>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {MobileMenu.map((item, index) => {
                          return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path} onClick={closeMobileMenu}>
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
};

export default Header;
