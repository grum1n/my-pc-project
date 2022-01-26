import React, { useEffect, useState } from 'react';
import { fireDB } from '../../../../../server/firebase-config';
import { onValue, ref } from 'firebase/database';
import LinksButton from '../../../../../components/LinksButton';
import './accordeonSavedParts.css';

function SavedCarParts({ savedCarPartsID }) {

    const [newData, setNewData] = useState([]);

    function fecthData () {
        onValue(ref(fireDB, `destructiveCars/${savedCarPartsID}/carPartsCollection/savedCarParts`), (snapshot) => {
            setNewData([]);
            const data = snapshot.val();
            if(data !== null) {
                Object.values(data).map((partsCollection) => {
                    setNewData((oldArray) => [ ...oldArray, partsCollection]);
                });
            }
        });
    }
    
    useEffect(() => {
        fecthData();
    }, []);

    return (
        <ul className='saved-car-parts-table'>
            <li className='saved-car-parts-table-title'>
                <span className='table-title-name'>No.</span>
                <span className='table-title-name'>Part</span>
            </li>
            {
                newData.map((part, partId) => {
                    return(
                        <>
                        <li key={partId} className='saved-car-parts'>
                            <span className=''>{partId + 1}. {part} </span>
                            <LinksButton redirectPath={`/autorized/car_parts/edit/${savedCarPartsID}`} name={`Edit id: ${partId}`}/>
                        </li>
                        </>
                    )
                })
            }
        </ul>
    )
}

export default SavedCarParts;