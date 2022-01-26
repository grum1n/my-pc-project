import React from 'react'
import Dashboard from '../../../components/Dashboard'
import DashboardContent from '../../../components/DashboardContent'
import SingleCard from '../../../components/SingleCard';
import { useUserAuth } from '../../../context/UserAuthContext';
import PreparedCarParts from './preparedCarParts';

function CarParts() {
    const { user, logOut } = useUserAuth();
    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent name='Car Parts'>
                <section className='section-one-card'> 
                    <SingleCard title='Prepared Car Parts'>
                        <PreparedCarParts />
                    </SingleCard>
                </section>   
            </DashboardContent>
        </Dashboard>
    )
}

export default CarParts;
