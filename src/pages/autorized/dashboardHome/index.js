import React from 'react';
import DashBoardSidebar from '../../../components/DashBoardSidebar';
import CarParts from '../../../components/CarpartsList.js/CarParts';
import Addpart from '../addCarPart';
import './dashboardHome.css';

const Dashboard = () => {
  return (
    <>
      <DashBoardSidebar />
      <main className='dashboard-main'>
        <section className='container'>
          <Addpart />
        </section>
        <section>
        <CarParts />
        </section>
      </main>
    </>
  );
};

export default Dashboard;
