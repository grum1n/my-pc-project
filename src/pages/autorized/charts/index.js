import React from 'react'
import Dashboard from '../../../components/Dashboard'
import DashboardContent from '../../../components/DashboardContent'
import SingleCard from '../../../components/SingleCard';
import { useUserAuth } from '../../../context/UserAuthContext';

function Charts() {
    const { user, logOut } = useUserAuth();
    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent name='Charts'>
                <section className='section-one-card'> 
                    <SingleCard title='Charts tables'>
                       tables
                    </SingleCard>
                </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default Charts
