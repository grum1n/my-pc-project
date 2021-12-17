import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from './LogoImage';
import '../styles/frontStyle.css';

const Header = () => {
  return (
        <header>
            <nav className='container flex-container'>
            <Link to="/">
                <LogoImage />
            </Link>
            <ul className='flex-container'>
                <li className="navigation-li">
                    <Link className="loginButton" to="/login">
                        Login in
                    </Link>
                </li>
                <li>
                    <Link className="registerButton" to="/register">
                        Register
                    </Link>
                </li>
            </ul>
            </nav>
        </header>
  );
};

export default Header;
