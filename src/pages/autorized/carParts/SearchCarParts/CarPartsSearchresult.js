import React from "react";
import { useUserAuth } from '../../../../context/UserAuthContext';
import Dashboard from '../../../../components/Dashboard';
import DashboardContent from '../../../../components/DashboardContent';
import SingleCard from '../../../../components/SingleCard';
import CarPartsSearchBox from "./CarPartsSearchBox";

function CarPartsSearchresult() {
    const { user, logOut } = useUserAuth();
       
    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent name='Cars'>
            <section className='section-one-card'> 
                <SingleCard title='Car Parts search result'>
                   <CarPartsSearchBox />
                </SingleCard>
            </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default CarPartsSearchresult;