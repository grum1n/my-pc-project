import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { fireDB } from "../../../../../server/firebase-config";
import { uid } from "uid";
import { useNavigate } from "react-router-dom";

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
  

    // write
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

//     const [group, setGroup] = useState('');
//   const [groups, setGroups] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [groupUid, setGroupUid] = useState('');

    // useEffect(() => {
    //     onValue(ref(fireDB, `/groups`), (snapshot) => {
    //         setCarPartInfo([]);
    //         const data = snapshot.val();
    //         if(data !== null) {
    //             Object.values(data).map((group) => {
    //                 setCarPartInfo((oldArray) => [ ...oldArray, group]);
    //             });
    //         }
    //     });
    // }, []);
  


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const part_id = uid();
    //     set(ref(fireDB , `/parts/${part_id}`), {
    //         // carId,
    //         // carBrand,
    //         // carModel,
    //         // carYear,
    //         // carPart,
    //         // part_id,
    //         // carPartPrice
    //     });
    // }


    //  //update
    //  const handleUpdate = (group) => {
    //     setIsEdit(true);
    //     setGroupUid(group.uuid);
    //     setGroup(group.group);
    // };

    // const handleSubmitChange = () => {
    //     update(ref(fireDB, `/groups/${groupUid}`), {
    //       group,
    //       uuid: groupUid
    //     })
    //     setGroup('');
    //     setIsEdit(false);
    // };

    // //delete
    // const handleDelete = (group) => {
    //     remove(ref(fireDB, `/groups/${group.uuid}`))
    // };

    return (
        <ul className='groups-container'>
        <li>
        <input type='number' value={price}  placeholder='Price ..' onChange={handlePriceChange} />
        </li> 
        <li>
        <input type='text' value={placeInWarehouse}  placeholder='Place ..' onChange={handlePlaceChange} />
        </li> 
        <li>
        <input type='text' value={partCode}  placeholder='partCode ..' onChange={handlePartCodeChange} />
        </li> 
        <li>
            <input type='text' value={displayTodaysDate} readOnly='true'/>
        </li>
        <li>
        <select className='dropdown' name={selectedStatus} onChange={handleChangeStatus}>
            <option>Please Select</option>
            <option value='forSale'>For sale</option>
            <option value='reserved'>Reserved</option>
            <option value='sold'>Sold</option>
        </select>
        </li>
        <li>
            <button className='group-button' onClick={AddCarPartToList} >Add car Part to Public List</button>
        </li>
      </ul>
    )
}

export default EditSubForm;