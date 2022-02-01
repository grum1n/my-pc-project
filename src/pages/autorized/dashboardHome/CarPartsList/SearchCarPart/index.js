import React from "react";
import { useUserAuth } from '../../../../../context/UserAuthContext';
import Dashboard from '../../../../../components/Dashboard';
import DashboardContent from '../../../../../components/DashboardContent';
import SingleCard from '../../../../../components/SingleCard';
import SearchCarPart from "./SearchCarPartResult.js";

function SearchCarPartResult() {
    const { user, logOut } = useUserAuth();
       
    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent name='Search Car Part'>
            <section className='section-one-card'> 
                <SingleCard title='Search car  part result'>
                    <SearchCarPart />
                </SingleCard>
            </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default SearchCarPartResult;