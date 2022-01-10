import React from 'react'
import Dashboard from '../../../components/Dashboard'
import DashboardContent from '../../../components/DashboardContent'
import SingleCard from '../../../components/SingleCard';
import { useUserAuth } from '../../../context/UserAuthContext';

function Custumers() {
    const { user, logOut } = useUserAuth();
    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent name='Customers'>
            <section className='section-one-card'> 
                <SingleCard title='Customers'>
                    add Customer<br/>
                    update Customer <br />
                    delete Customer <br />
                    Customers List 
                </SingleCard>
            </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default Custumers
