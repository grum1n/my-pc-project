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
            <DashboardContent name='Cars'>
            <section className='section-one-card'> 
                <SingleCard title='Car search result'>
                   <CarSearchBox />
                </SingleCard>
            </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default CarSearchResult;