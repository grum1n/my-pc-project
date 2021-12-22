import React from 'react';
import DashBoardSidebar from '../../../components/DashBoardSidebar';
import Addpart from '../AddCarPart/Addpart';
import './dashboardHome.css';

const Dashboard = () => {
  return (
    <>
      <DashBoardSidebar />
      <main className='dashboard-main'>
        <section className='container'>
          <Addpart />
        </section>
      </main>
    </>
  );
};

export default Dashboard;
