import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { SidebarData } from './DashBoardSidebarData';

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
                            <Link className="registerButton" to="/login">
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
                        {SidebarData.map((item, index) => {
                          return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                          );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
  );
};

export default DashboardNavbar;
