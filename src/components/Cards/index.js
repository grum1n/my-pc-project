import React from 'react';
import * as FaIcons from 'react-icons/fa';
import './cards.css';

function Cards() {
    return (
        <div className='cards'>
                <div className='card-single'>
                <div>
                    <h3>54</h3>
                    <span>Customers</span>
                </div>
                <div>
                    <span className=''><FaIcons.FaUsers /></span>
                </div>
                </div>
                <div className='card-single'>
                <div>
                    <h3>79</h3>
                    <span>Projects</span>
                </div>
                <div>
                    <span className=''><FaIcons.FaClipboard /></span>
                </div>
                </div>
                <div className='card-single'>
                <div>
                    <h3>124</h3>
                    <span>Orders</span>
                </div>
                <div>
                    <span className=''><FaIcons.FaShoppingBag /></span>
                </div>
                </div>
                <div className='card-single'>
                <div>
                    <h3>$6k</h3>
                    <span>Income</span>
                </div>
                <div>
                    <span className=''><FaIcons.FaWallet /></span>
                </div>
                </div>
            </div>
    )
}

export default Cards
