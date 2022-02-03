import { endAt, onValue, orderByChild, query, ref, startAt } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LinksButton from "../../../../components/LinksButton";
import SearchField from "../../../../components/SearchField";
import { fireDB } from '../../../../server/firebase-config';

function CarSearchBox () {
    const [data, setData] = useState({});

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let searchQuery = useQuery();
    let search = searchQuery.get('carBrand');
  
    useEffect(() => {
        onValue(query(ref(fireDB, 'destructiveCars'), orderByChild('carBrand'), startAt(search), endAt(search + "\uf8ff")),(snapshot) => {
            if (snapshot.val()) {
                const data = snapshot.val();
                setData(data);
            }
        });
    }, [search]);

    return (
        <div>
            <LinksButton redirectPath={`/autorized/cars`} name={'atgal'} />
            <SearchField
                navigatePath={`/autorized/cars_search?carBrand=`}
                placehoderText='Auto paieška ...'
                buttonColor='#333333'
            />
            {Object.keys(data).length === 0 ? (
            <h2>No Search Found with that name :</h2>
        ) : (
                 <table className='search-table'>
                 <thead style={{ backgroundColor: 'var(--dark-gray)', color: 'var(--white)' }}>
                     <tr>
                         <th style={{ textAlign: 'center' }}>Nr.</th>
                         <th style={{ textAlign: 'center' }}>Mark4 </th>
                         <th style={{ textAlign: 'center' }}>Modelis</th>
                         <th style={{ textAlign: 'center' }}>Metai</th>
                         <th style={{ textAlign: 'center' }}>Statusas</th>
                     </tr>
                 </thead>
                 <tbody>
                     {Object.keys(data).map((id, index) => {
                         return(
                             <tr key={id}>
                                 <th scope='row'>
                                     {index + 1}
                                 </th>
                                 <td>{data[id].carBrand}</td>
                                 <td>{data[id].carModel}</td>
                                 <td>{data[id].carYear}</td>
                                 <td>{data[id].status}</td>
                             </tr>
                         )
                     })}
                 </tbody>
             </table>
        )}
        </div>
    )
}
export default CarSearchBox;