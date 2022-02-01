import React, { useEffect, useState } from "react";
import  { fireDB } from '../../../../server/firebase-config';
import { onValue, ref} from "firebase/database";
import './carPartsList.css';

const CarPartsList = () => {
    const [groups, setGroups] = useState([]);
   
    useEffect(() => {
      onValue(ref(fireDB, `/carParts`), (snapshot) => {
          setGroups([]);
          const data = snapshot.val();
          if(data !== null) {
            Object.values(data).map((parts) => {
                setGroups((oldPartsArray) => [ ...oldPartsArray, parts]);
            });
          }
      });
    }, []);

    return (
        <ul>
        <li>
          {
            groups.map((part,index) => (
              <div key={index} className='car-parts-list-container'>
                <img src={part.carPartImageUrl[0]} alt='' className='car-parts-img'/>
                <div className='car-parts-list-grid'>
                    <h3 className='col-1 car-parts-info-title'>{part.carPartName}</h3>
                    <p className='col-2 car-part-price'><span>Price: {part.price} &euro;</span></p>
                    <div className='col-3 car-parts-info'>
                      <p>Car : {part.carBrand} {part.carModel}</p>
                      <p>Year : {part.carYear}</p>
                      <p>PartCode: {part.partCode}.</p>
                    </div>
                    <div className='col-4 car-parts-info'>
                      <p>Status : {part.selectedStatus}</p>
                      <p>Date: {part.displayTodaysDate}</p>
                      <h5>CarID: {part.carId} / CarPartID: {part.carPartId} / Part_id: {part.part_id} / Place: {part.placeInWarehouse}</h5>
                    </div>
                </div>
                {/* <div className='car-parts-info-action'>
                  <button className='group-edit-btn'  onClick={() => handleUpdate(group)}><FaIcons.FaEdit /></button>
                  <button  className='group-delete-btn' onClick={() => handleDelete(group)}><FaIcons.FaTimes /></button>
                </div> */}
              </div>
            ))
          }
          </li>
      </ul>
    )
}

export default CarPartsList;