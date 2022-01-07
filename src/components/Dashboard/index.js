import React from 'react';
import './dashboard.css';

function Dashboard({ children }) {
    return (
        <main className='dashboard'>
            {children}
        </main>
    )
}

export default Dashboard
