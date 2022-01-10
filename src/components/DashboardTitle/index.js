import React from 'react';
import './dashboardTitle.css';

function PageHeading({ name }) {
    return (
        <div className='section-heading'>
            <h2>{name}</h2>
            <div className='section-heading-right'>
                <h4>Dashboard / </h4>
                <span>{name}</span>
            </div>
        </div>
    )
}

export default PageHeading;
