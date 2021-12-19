import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { SidebarData } from './DashBoardSidebarData';
import DashboardLogo from './DashboardLogoImage';

const DashboardNavbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
        <>
            <IconContext.Provider value={{ color: '#fff' }} >
                <header className="dashboard-header">
                    <nav className='flex-between'>
                        <div className='flex-container'>
                            <Link to="/dashboard">
                                <DashboardLogo />
                            </Link>
                            <Link to="#" className="menu-bars">
                                <FaIcons.FaBars onClick={showSidebar} />
                            </Link>
                        </div>
                        <ul className='flex-container'>
                            <li>
                                <Link className="logout-button" to="/login">
                                    Atsijungti
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
