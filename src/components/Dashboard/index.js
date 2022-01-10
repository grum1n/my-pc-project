import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './dashboard.css';
import LogoImage from '../LogoImage';
import { DashboardLinks } from './DashboardLinks';
import ImgLogo from '../../images/CarPLogo3.png';
import userImg from '../../images/profile.jpg';
import Button from '../Button';

function Dashboard({ userEmail, logOut, children }) {
    // const [sidebar,setSidebar] = useState(true);
    const sidebar = true;
    const [main,setMain] = useState(true);
    const showSidebar = () => {
        // setSidebar(!sidebar);
        setMain(!main);
    } 
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/login');
        } catch (error) {
        //  {error.message}
        }
    };
    return (
        <>
        <div className='dashboard-container'>
        <header className='dashboard-header'>
                <nav className='flex-between'>
                    <div className='flex-container'>
                        <Link to='/autorized/dashboard_home'>
                            <LogoImage url={ImgLogo} title='logo' cName='logo-style' />
                        </Link>
                        <Link to='#' className='dashboard-menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                    </div>
                    <div className='search-wrapper'>
                        <span className=''><FaIcons.FaSearch /></span>
                        <input type='search' placeholder='Search here'/>
                    </div>
                    <ul className='flex-container user-wrapper'>
                        <li>
                            <LogoImage url={userImg} title='user logo' cName='user-header-style' />
                        </li>
                        <li>
                            <h4>{userEmail}</h4>
                            <small>Super Admin</small>
                        </li>
                        <li className='logout-button-container'>
                            <Button onClick={handleLogout} cName='logout-button' name='Logout' />
                        </li>
                    </ul>
                </nav>
            </header>
        
            <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
                <ul className='sidebar-menu-items' onClick={showSidebar}>
                    {DashboardLinks.map((item, index) => {
                        return (
                        <li key={index}>
                            <Link to={item.path} className={item.cName}>
                                <span>{item.icon}</span>
                               {item.title}
                            </Link>
                        </li>
                        );
                    })}
                </ul>
            </nav>
            <div className={main ? 'main-content' : 'main-content-full'}>
                {children}
            </div>
        </div>
        </>
            
    )
}

export default Dashboard;
