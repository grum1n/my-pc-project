import React from 'react';
import './dashboardHome.css';
import Dashboard from '../../../components/Dashboard';
import { useUserAuth } from '../../../context/UserAuthContext';
import DashboardContent from '../../../components/DashboardContent';

function DashboardHome() {
    const { user, logOut } = useUserAuth();
    
    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
           <DashboardContent>
                <h1 className='dashboard-home'>Dashboard Home</h1>
           </DashboardContent>
        </Dashboard>
    )
}

export default DashboardHome
