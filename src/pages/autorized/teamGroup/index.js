import React from 'react';
import './teamGroup.css';
import Dashboard from '../../../components/Dashboard';
import DashboardContent from '../../../components/DashboardContent';
import { useUserAuth } from '../../../context/UserAuthContext';
import SingleCard from '../../../components/SingleCard';

const TeamGroup = () => {
  const { user, logOut } = useUserAuth();
  return (
    <Dashboard userEmail={user.email} logOut={logOut}>
      <DashboardContent name='Team group'>
      <section className='section-one-card'> 
        <SingleCard title='Groups'>
            add group<br/>
            update group <br />
            delete group <br />
            group List <br />
            team list
        </SingleCard>
      </section>
      </DashboardContent>
    </Dashboard>
  );
};

export default TeamGroup;
