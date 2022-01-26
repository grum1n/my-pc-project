import React from "react";
import { useUserAuth } from '../../../context/UserAuthContext';
import Dashboard from '../../../components/Dashboard';
import DashboardContent from '../../../components/DashboardContent';
import SingleCard from '../../../components/SingleCard';
import GarageCarList from './GarageCarList';

function Garage() {
    const { user, logOut } = useUserAuth();
       
    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent name='Garage'>
            <section className='section-one-card'> 
                <SingleCard title='Destructive cars'>
                    <GarageCarList />
                </SingleCard>
            </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default Garage;