import React, { useEffect, useState } from 'react';
import { fireDB } from '../../../../server/firebase-config';
import { onValue, ref } from 'firebase/database';
import './preparedCarParts.css';
import SavedCarParts from './AccordeonSavedParts';

function PreparedCarParts() {
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

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if(clicked === index) {
            return(
                setClicked(null)
            );
        }
        setClicked(index);
    }

    return(
        <ul className='cars-list-container'>
            {
                Object.keys(data).map(( id, index) => 
                    <div className='WrapContainer' key={index}>
                        <div className='Wrap' onClick={() => toggle(index)} key={index}>
                            <span>{index + 1}</span>
                            <h1>{data[id].carBrand} {data[id].carModel} / {data[id].carYear} / {data[id].status}</h1>
                        </div>
                        {clicked === index ? (
                            <div className='Dropdown'>
                                <SavedCarParts savedCarPartsID={id}/>
                            </div>
                        ) : null }
                    </div>
                )
            }
        </ul>
    )
}

export default PreparedCarParts;