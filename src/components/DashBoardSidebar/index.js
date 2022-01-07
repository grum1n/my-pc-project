import React, { useState } from 'react';
import './dashboardSidebar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { SidebarData } from './DashBoardSidebarData';
import DashboardLogo from './DashboardLogoImage';

const DashBoardSidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
        <>
            <IconContext.Provider value={{ color: '#fff' }} >
                <header className='dashboard-header'>
                    <nav className='flex-between'>
                        <div className='flex-container'>
                            <Link to='/dashboard'>
                                <DashboardLogo />
                            </Link>
                            <Link to='#' className='dashboard-menu-bars'>
                                <FaIcons.FaBars onClick={showSidebar} />
                            </Link>
                        </div>
                        <ul className='flex-container'>
                            <li>
                                log out button
                                {/* <Link className='logout-button' to='/login'>
                                    Atsijungti
                                </Link> */}
                            </li>
                        </ul>
                    </nav>
                </header>
                <nav className={sidebar ? 'dashboard-nav-menu active' : 'dashboard-nav-menu'}>
                    <ul className='dashboard-nav-menu-item' onClick={showSidebar}>
                        <li className='dashboard-navbar-toggle'>
                            <Link to='#' className='dashboard-menu-bars'>
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

export default DashBoardSidebar;
