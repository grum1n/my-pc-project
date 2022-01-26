import React from 'react';
import './dashboardHome.css';
import Dashboard from '../../../components/Dashboard';
import { useUserAuth } from '../../../context/UserAuthContext';
import DashboardContent from '../../../components/DashboardContent';
import Cards from '../../../components/Cards';
import SingleCard from '../../../components/SingleCard';

function DashboardHome() {
    const { user, logOut } = useUserAuth();
    
    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent>
                <Cards />
                <section className='section-two-cards'>
                    <SingleCard title='Single card A'>
                        text 1
                    </SingleCard>
                    <SingleCard title='Single card B'>
                        text 2
                    </SingleCard>
                </section>
                
                <section className='section-one-card'> 
                    <SingleCard title='Single card C'>
                        text 2
                    </SingleCard>
                </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default DashboardHome;
