import React from 'react';
import './dashboardHome.css';
import Dashboard from '../../../components/Dashboard';
import { useUserAuth } from '../../../context/UserAuthContext';
import DashboardContent from '../../../components/DashboardContent';
import Cards from '../../../components/Cards';
import SingleCard from '../../../components/SingleCard';
import CarPartsList from './CarPartsList';
import SearchField from '../../../components/SearchField';

function DashboardHome() {
    const { user, logOut } = useUserAuth();
    
    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent>
                <Cards />
                <section className='section-one-card'> 
                    <SingleCard title='Detalės'>
                        <div className='dashboard-searchField-box'>
                            <SearchField
                                navigatePath={`/autorized/car_parts_search?carPartName=`}
                                placehoderText='Detalės pavadinimas ...'
                                buttonColor='#333333'
                            />
                        </div>
                        <CarPartsList />
                    </SingleCard>
                </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default DashboardHome;
