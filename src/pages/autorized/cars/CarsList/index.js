import React, { useEffect, useState } from 'react';
import { fireDB } from '../../../../server/firebase-config';
import { onValue, ref, remove } from 'firebase/database';
import './cars.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import SearchField from '../../../../components/SearchField';

function CarsList() {
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

    const onDelete = (id) => {
        if (window.confirm('Are you sure that you wanted to delete that contact ?')){
            remove(ref(fireDB, `/destructiveCars/${id}`), (err) => {
                if (err ){
                    alert(err);
                } else {
                    alert('Deleted.');
                }
            });
        }
    }

    return(
        <ul className='cars-list-container'>
            <li className='cars-search-container'>
                <SearchField
                    navigatePath={`/autorized/cars_search?carBrand=`}
                    placehoderText='Search car brand ...'
                    buttonColor='#333333'

                />
            </li>
            <li className='cars-list-title'>
                <span className='cars-info-container'>No.</span>
                <span className='cars-info-container'>Brand</span>
                <span className='cars-info-container'>Model</span>
                <span className='cars-info-container'>Years</span>
                <span className='cars-info-container'>Status</span>
                <span className='cars-list-action-box'>Action</span>
            </li>
            {
                Object.keys(data).map((id, index) => {
                    return(
                        <li key={id} className='cars-list-align car-list-hover'>
                            <span className='col-1 cars-info-container'>{index + 1}</span>
                            <span className='col-2 cars-info-container'>{data[id].carBrand}</span>
                            <span className='col-3 cars-info-container'>{data[id].carModel}</span>
                            <span className='col-4 cars-info-container'>{data[id].carYear}</span>
                            <span className='col-5 cars-info-container'>{data[id].status}</span>
                            <span className='col-6 cars-list-action-box'>
                                <Link to={`/autorized/update_destructive_car_info/${id}`}>
                                    <button className='btn btn-edit'><FaIcons.FaEdit /></button>
                                </Link>
                                    <button className='btn btn-delete' onClick={() => onDelete(id)}><FaIcons.FaTimes /></button>
                                <Link to={`/autorized/cars/saved_car_parts/${id}`}>
                                    <button className='btn btn-view'><FaIcons.FaEye /></button>
                                </Link>
                            </span>
                        </li>
                    );
                })
            }
        </ul>
    )
}

export default CarsList;