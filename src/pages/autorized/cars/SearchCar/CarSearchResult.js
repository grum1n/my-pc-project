import React from "react";
import { useUserAuth } from '../../../../context/UserAuthContext';
import Dashboard from '../../../../components/Dashboard';
import DashboardContent from '../../../../components/DashboardContent';
import SingleCard from '../../../../components/SingleCard';
import CarSearchBox from "./SearchBox";

function CarSearchResult() {
    const { user, logOut } = useUserAuth();
       
    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent name='Automobiliai'>
            <section className='section-one-card'> 
                <SingleCard title='Paieška pagal auto markę'>
                   <CarSearchBox />
                </SingleCard>
            </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default CarSearchResult;