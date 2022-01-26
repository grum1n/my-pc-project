import React from 'react';
import CarsAndModels from '../../../components/CarsAndModels';
import Dashboard from '../../../components/Dashboard'
import DashboardContent from '../../../components/DashboardContent'
import SingleCard from '../../../components/SingleCard';
import { useUserAuth } from '../../../context/UserAuthContext';

function Settings() {
    const { user, logOut } = useUserAuth();

    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent name='Settings'>
                <section className='section-one-card'> 
                    <SingleCard title='Add Car or Model to List'>
                        <CarsAndModels />
                    </SingleCard>
                </section>
                <section className='section-one-card'> 
                    <SingleCard title='Here can change settings'>
                       add, update ,remove
                       <hr />
                    </SingleCard>
                </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default Settings;
