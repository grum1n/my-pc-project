import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from './LogoImage';
import '../styles/frontStyle.css';

const Header = () => {
  return (
        <header>
            <nav className='flex-between'>
                <Link to='/'>
                    <LogoImage />
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
        </header>
  );
};

export default Header;
