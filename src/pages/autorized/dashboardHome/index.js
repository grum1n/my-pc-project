import React from 'react';
import './dashboardHome.css';
import Dashboard from '../../../components/Dashboard';
import { useUserAuth } from '../../../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';

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
            <h3>Hello , {user && user.email}</h3>
            DashboardHome
            <p>
                <button variant='primary' onClick={handleLogout}>Log out</button>
            </p>
        </Dashboard>
    )
}

export default DashboardHome
