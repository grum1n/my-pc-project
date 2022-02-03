import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { fireDB } from "../../../../../server/firebase-config";
import { uid } from "uid";
import { useNavigate } from "react-router-dom";
import './editForm.css';

const EditSubForm = ({ carId, carBrand, carModel, carYear,carPartId, carPartName, carPartImageUrl}) => {
    const [selectedStatus, setSelectedStatus] = useState('');
    const [price, setPrice] = useState('');
    const [partCode, setPartCode] = useState('');
    const [placeInWarehouse, setPlaceInWareHouse] = useState('');

    const navigate = useNavigate();

    const showNewDate = new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months[showNewDate.getMonth()];
    const displayTodaysDate = showNewDate.getDate()+'/'+month+'/'+showNewDate.getFullYear();
  
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
    const handlePartCodeChange = (e) => {
        setPartCode(e.target.value);
    }
    const handlePlaceChange = (e) => {
        setPlaceInWareHouse(e.target.value);
    }
  

    const AddCarPartToList = () => {
        const part_id = uid();
        set(ref(fireDB , `/carParts/${part_id}`), {
            carId,
            carBrand,
            carModel,
            carYear,
            carPartId,
            carPartName,
            price,
            part_id,
            selectedStatus,
            carPartImageUrl,
            partCode,
            displayTodaysDate,
            placeInWarehouse
        });
        setPrice('');
        navigate('/autorized/dashboard_home');
    };

    const handleChangeStatus = (event) => {
        setSelectedStatus(event.target.value)
    }

    return (
        <ul className='editSubForm-container'>
            <li>
                <input className='editSubForm-input' type='text' value={partCode}  placeholder='Detalės kodas ..' onChange={handlePartCodeChange} />
            </li> 
            <li>
                <input className='editSubForm-input' type='number' value={price}  placeholder='Kaina ..' onChange={handlePriceChange} />
            </li> 
            <li>
                <select className='editSubForm-dropdown' name={selectedStatus} onChange={handleChangeStatus}>
                    <option>Pasirinkite būseną</option>
                    <option value='forSale'>Parduodama</option>
                    <option value='reserved'>Rezervuota</option>
                    <option value='sold'>Parduota</option>
                </select>
            </li>
            <li>
                <input className='editSubForm-input' type='text' value={placeInWarehouse}  placeholder='Sandėlio vieta ..' onChange={handlePlaceChange} />
            </li> 
            
            <li>
                <input className='editSubForm-input' type='text' value={displayTodaysDate} readOnly='true'/>
            </li>
            
            <li>
                <button className='editSubForm-button' onClick={AddCarPartToList} >Pridėti į sandėlį</button>
            </li>
      </ul>
    )
}

export default EditSubForm;