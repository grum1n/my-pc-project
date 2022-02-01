import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fireDB } from '../../../../../../server/firebase-config';
import { ref, set } from 'firebase/database';
import { packingListData } from './packingListData';
import './carPartsCheckbox.css';

function CarPartsCheckBox() {
    const [savedCarParts, setSavedCarParts] = useState([]);
    const [checkedState, setCheckedState] = useState(
    new Array(packingListData.length).fill(false)
    );

    const {id} = useParams();

    const navigate = useNavigate();

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);

    let myArray = [];
  
    const parts = updatedCheckedState.reduce(
        (name, currentState, index) => {
            if (currentState === true) {
            myArray.push(packingListData[index].name)
            return myArray;
            }
            // return 'please check box grumin';
        },
        ''
        );
        setSavedCarParts(parts);
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        set(ref(fireDB , `destructiveCars/${id}/carPartsCollection`), {
            savedCarParts
        });
        navigate(`/autorized/garage/saved_parts/${id}`);
    }
   
    return (
        <form onSubmit={handleOnSubmit}>
            <ul>
                {
                    packingListData.map(({ name }, index) => {
                        return (
                            <li key={index} style={{ padding: '5px' }}>
                                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                <input
                                    type='checkbox'
                                    id={`custom-checkbox-${index}`}
                                    name={name}
                                    value={name}
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)}
                                />
                            </li>
                        );
                    })
                }   
                <button type='submit' className='submit-button'>Add parts</button>
            </ul>
        </form>
    );
}

export default CarPartsCheckBox;