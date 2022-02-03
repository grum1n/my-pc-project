import { endAt, onValue, orderByChild, query, ref, startAt } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LinksButton from "../../../../../components/LinksButton";
import SearchField from "../../../../../components/SearchField";
import { fireDB } from '../../../../../server/firebase-config';
import './searchCarPart.css';
import * as FaIcons from 'react-icons/fa';


function SearchCarPart () {
    const [data, setData] = useState({});

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let searchQuery = useQuery();
    let search = searchQuery.get('carPartName');
  
    useEffect(() => {
        onValue(query(ref(fireDB, 'carParts'), orderByChild('carPartName'), startAt(search), endAt(search + "\uf8ff")),(snapshot) => {
            if (snapshot.val()) {
                const data = snapshot.val();
                setData(data);
            }
        });
    }, [search]);

    return (
        <>
            <LinksButton redirectPath={`/autorized/dashboard_home`} name={'atgal'} />
            <div className='search-component-box'>
                <SearchField
                    navigatePath={`/autorized/car_parts_search?carPartName=`}
                    placehoderText='Detalės pavadinimas ..'
                    buttonColor='#333333'
                />
            </div>
            <ul>
                {Object.keys(data).map((id, index) => {
                    return(
                        <li key={id} className='search-car-parts-list-container'>
                            <img src={data[id].carPartImageUrl[0]} alt='' className='car-parts-img'/>
                            <div className='car-parts-list-grid'>
                                <h3 className='col-1 car-parts-info-title'>{data[id].carPartName}</h3>
                                <p className='col-2 car-part-price'><span>Kaina: {data[id].price} &euro;</span></p>
                                <div className='col-3 car-parts-info'>
                                <p>Automobilis : {data[id].carBrand} {data[id].carModel}</p>
                                <p>Metai : {data[id].carYear}</p>
                                <p>Kodas: {data[id].partCode}.</p>
                                </div>
                                <div className='col-4 car-parts-info'>
                                <p>Statusas : {data[id].selectedStatus}</p>
                                <p>Data: {data[id].displayTodaysDate}</p>
                                <h5>CarID: {data[id].carId} / CarPartID: {data[id].carPartId} / Part_id: {data[id].part_id} /  Vieta: {data[id].placeInWarehouse} / <span> Find: {index + 1}</span> </h5>
                                </div>
                            </div>
                            <div className='car-parts-info-action'>
                            {/* <button className='group-edit-btn'  onClick={() => handleUpdate(group)}><FaIcons.FaEdit /></button>
                            <button  className='group-delete-btn' onClick={() => handleDelete(group)}><FaIcons.FaTimes /></button> */}
                        
                                <button className='group-edit-btn'  ><FaIcons.FaEdit /></button>
                                <button  className='group-delete-btn' ><FaIcons.FaTimes /></button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>  
    )
}
export default SearchCarPart;
