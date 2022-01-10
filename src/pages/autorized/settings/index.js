import React from 'react';
import Button from '../../../components/Button';
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
                    <SingleCard title='Add car brand and model'>
                        add, update ,remove <br />
                        <input />
                        <Button cName='' onClick='' name='Add' />
                        <br />
                         List
                       
                    </SingleCard>
                </section>
                <section className='section-one-card'> 
                    <SingleCard title='Here can change settings'>
                       add, update ,remove
                    </SingleCard>
                </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default Settings;
