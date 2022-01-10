import React from 'react'
import Dashboard from '../../../components/Dashboard'
import DashboardContent from '../../../components/DashboardContent'
import SingleCard from '../../../components/SingleCard';
import { useUserAuth } from '../../../context/UserAuthContext';

function CarParts() {
    const { user, logOut } = useUserAuth();
    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent name='Car Parts'>
                <section className='section-one-card'> 
                    <SingleCard title='Car Parts List'>
                        add car part <br />
                        update car part<br /> 
                        delete <br />
                         list

                    </SingleCard>
                </section>    
                   car parts page
                    {/* <section className='container'>
                <Addpart />
                </section>
                <section>
                <CarParts />
                </section> */}
            </DashboardContent>
        </Dashboard>
    )
}

export default CarParts
