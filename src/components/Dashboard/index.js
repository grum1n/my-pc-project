import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './dashboard.css';
import LogoImage from '../LogoImage';
import { DashboardLinks } from './DashboardLinks';
import ImgLogo from '../../images/CarPLogo3.png';
import userImg from '../../images/profile.jpg';
import Button from '../Button';

function Dashboard({ userEmail, logOut, children }) {
    const sidebar = true;
    const [isVisible, setIsVisible] = useState(false);
    const [main, setMain] = useState(true);
    const showSidebar = () => {
        setMain(!main);
    } 
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/login');
        } catch (error) {
            alert(error);
        }
    };

    //scroll to top
    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
    };
    
    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
        <div className='dashboard-container'>
            <header className='dashboard-header'>
                <div className='flex-between'>
                    <div className='flex-container'>
                        <Link to='/autorized/dashboard_home'>
                            <LogoImage url={ImgLogo} title='logo' cName='logo-style' />
                        </Link>
                        <Link to='#' className='dashboard-menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                    </div>
                    <ul className='flex-container user-wrapper'>
                        <li className='userImage'>
                            <LogoImage url={userImg} title='user logo' cName='user-header-style' />
                        </li>
                        <li className='userEmail'>
                            <h4>{userEmail}</h4>
                            <small>Super Admin</small>
                        </li>
                        <li className='logout-button-container'>
                            <Button onClick={handleLogout} cName='logout-button' name='Logout' />
                        </li>
                    </ul>
                </div>
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
            <div className='scroll-to-top'>
                {isVisible && 
                    <div onClick={scrollToTop} className='scroll-chevron'>
                        <FaIcons.FaChevronUp />
                    </div>
                }
            </div>
        </div>
                
        </>  
    )
}

export default Dashboard;
