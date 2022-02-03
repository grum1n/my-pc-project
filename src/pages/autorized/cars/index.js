import React from "react";
import { useUserAuth } from '../../../context/UserAuthContext';
import Dashboard from '../../../components/Dashboard';
import DashboardContent from '../../../components/DashboardContent';
import SingleCard from '../../../components/SingleCard';
import AddDestructiveCar from './AddDestructiveCar';
import CarsList from './CarsList';

function Cars() {
    const { user, logOut } = useUserAuth();
       
    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent name='Automobiliai'>
            <section className='section-one-card'> 
                <SingleCard title='Pridėti automobilį'>
                    <AddDestructiveCar />
                </SingleCard>
            </section>
            <section className='section-one-card'> 
                <SingleCard title='Automobilių sąrašas'>
                    <CarsList />
                </SingleCard>
            </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default Cars;
