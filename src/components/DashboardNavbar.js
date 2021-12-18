import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
        <>
            <IconContext.Provider value={{ color: '#fff' }} >
                <header className="dashboard-header">
                    <nav className='container flex-container'>
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <ul className='flex-container'>
                        <li className="navigation-li">
                            <Link className="loginButton" to="/login">
                                Log out
                            </Link>
                        </li>
                    </ul>
                    </nav>
                </header>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-item' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
  );
};

export default DashboardNavbar;
