import React from 'react';
import './singleCard.css';


function SingleCard({ children, title }) {
    return (
        <div className='single-card'>
            <h3 className='single-card-title'>{title}</h3>
            <p className='single-card-content'>{children}</p>
        </div>
    )
}

export default SingleCard;
