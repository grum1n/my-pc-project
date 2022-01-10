import React from 'react';
import Dashboard from '../../../components/Dashboard';
import DashboardContent from '../../../components/DashboardContent';
import SingleCard from '../../../components/SingleCard';
import { useUserAuth } from '../../../context/UserAuthContext';

function Cars() {
    const { user, logOut } = useUserAuth();
    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent name='Cars'>
            <section className='section-one-card'> 
                <SingleCard title='Cars List'>
                    add Car<br/>
                    update Car <br />
                    delete Car 
                </SingleCard>
            </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default Cars;
