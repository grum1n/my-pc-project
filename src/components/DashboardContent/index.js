import React from 'react';
import PageHeading from '../DashboardTitle';
import './dashboardContent.css';

function DashboardContent({ children, name}) {
    return (
        <div className='dashboard-content'>
            <PageHeading name={name}/>
            {children}
        </div>
    )
}

export default DashboardContent;
