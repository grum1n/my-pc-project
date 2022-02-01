import { endAt, onValue, orderByChild, query, ref, startAt } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchCarParts from ".";
import LinksButton from "../../../../components/LinksButton";
import { fireDB } from '../../../../server/firebase-config';


function CarPartsSearchBox () {
    const [data, setData] = useState({});

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let searchQuery = useQuery();
    let search = searchQuery.get('carBrand');
  


    useEffect(() => {
        onValue(query(ref(fireDB, 'carParts'), orderByChild('carBrand'), startAt(search), endAt(search + "\uf8ff")),(snapshot) => {
            if (snapshot.val()) {
                const data = snapshot.val();
                setData(data);
            }
        });
    }, [search]);

    return (
        <>
        <hr />
        bdhscbklcbs
        <div>
            <LinksButton redirectPath={`/autorized/dashboard_home`} name={'Go back to Dashboard Main page'} />
            <SearchCarParts />
            {Object.keys(data).length === 0 ? (
            <h2>No Search Found with that car name :</h2>
        ) : (
                 <table className='search-table'>
                 <thead style={{ backgroundColor: 'var(--dark-gray)', color: 'var(--tate-olive)' }}>
                     <tr>
                         <th style={{ textAlign: 'center' }}>No.</th>
                         <th style={{ textAlign: 'center' }}>Car Name </th>
                         <th style={{ textAlign: 'center' }}>Model</th>
                         <th style={{ textAlign: 'center' }}>Year</th>
                         <th style={{ textAlign: 'center' }}>Status</th>
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
        </>
        
    )
}
export default CarPartsSearchBox;