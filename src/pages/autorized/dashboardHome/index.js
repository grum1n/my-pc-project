import React from 'react';
import './dashboardHome.css';
import Dashboard from '../../../components/Dashboard';
import { useUserAuth } from '../../../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import DashBoardSidebar from '../../../components/DashBoardSidebar';

function DashboardHome() {
    const { logOut, user } = useUserAuth();
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
        <Dashboard>
           <DashBoardSidebar />
            <h3>Hello , {user && user.email}</h3>
            DashboardHome
            <p>
                <button variant='primary' onClick={handleLogout}>Log out</button>
            </p>
        </Dashboard>
    )
}

export default DashboardHome
