import React from 'react';
import DashBoardSidebar from '../../../components/DashBoardSidebar';

const Dashboard = () => {
  return (
    <>
      <DashBoardSidebar />
      <main className='dashboard-main'>
        <section className='container flex-center top-section'>
            Dashboard page
        </section>
      </main>
    </>
  );
};

export default Dashboard;
