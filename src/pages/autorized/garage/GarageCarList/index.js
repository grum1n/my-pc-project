import React, { useEffect, useState } from 'react';
import { fireDB } from '../../../../server/firebase-config';
import { onValue, ref } from 'firebase/database';
import './garageCarList.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

function GarageCarList() {
    const [ data, setData] = useState({});

    useEffect(() => {
        onValue(ref(fireDB,'destructiveCars' ),(snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() })
            } else {
                setData({});
            }
        });
        return () => {
            setData({});
        }
    }, []);

    return(
        <ul className='garage-list-container'>
            <li className='garage-list-title'>
                <span className='garage-info-container'>No.</span>
                <span className='garage-info-container'>Brand</span>
                <span className='garage-info-container'>Model</span>
                <span className='garage-info-container'>Years</span>
                <span className='garage-info-container'>Status</span>
                <span className='garage-list-action-box'>Action</span>
            </li>
            {
                Object.keys(data).map((id, index) => {
                    return(
                        <li key={id} className='garage-list-align car-list-hover'>
                            <span className='col-1 garage-info-container'>{index + 1}</span>
                            <span className='col-2 garage-info-container'>{data[id].carBrand}</span>
                            <span className='col-3 garage-info-container'>{data[id].carModel}</span>
                            <span className='col-4 garage-info-container'>{data[id].carYear}</span>
                            <span className='col-5 garage-info-container'>{data[id].status}</span>
                            <span className='col-6 garage-list-action-box'>
                                <Link to={`/autorized/garage/car_parts/${id}`}>
                                    <button className='garagebtn garagebtn-view'><FaIcons.FaListAlt /></button>
                                </Link>
                                <Link to={`/autorized/garage/saved_parts/${id}`}>
                                    <button className='garagebtn garagebtn-view'><FaIcons.FaEye /></button>
                                </Link>
                            </span>
                        </li>
                    );
                })
            }
        </ul>
    )
}

export default GarageCarList;