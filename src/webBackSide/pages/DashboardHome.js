import React from 'react';
// import DashboardHeader from '../../components/DachboardHeader';
import DashboardNavbar from '../../components/DashboardNavbar';

const Dashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <main className="dashboard-main">
        <section className="container flex-center top-section">
            Dashboard page
        </section>
      </main>
    </>
  );
};

export default Dashboard;
