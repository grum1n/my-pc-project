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
            <DashboardContent name='Paieška'>
            <section className='section-one-card'> 
                <SingleCard title='Detalės pavadinimo paieška'>
                    <SearchCarPart />
                </SingleCard>
            </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default SearchCarPartResult;