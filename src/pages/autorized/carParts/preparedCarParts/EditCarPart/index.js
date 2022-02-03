import React, { useEffect, useState } from 'react';
import { fireDB } from '../../../../../server/firebase-config';
import { useParams } from 'react-router-dom';
import { onValue, ref } from 'firebase/database';
import Dashboard from '../../../../../components/Dashboard';
import DashboardContent from '../../../../../components/DashboardContent';
import { useUserAuth } from '../../../../../context/UserAuthContext';
import LinksButton from '../../../../../components/LinksButton';
import EditCarPartForm from './EditForm';
import './editForm.css';

const initialState = {
    carBrand: '',
    carModel: '',
    carYear: '',
    status: ''
}

function EditCarPart() {
    const { user, logOut } = useUserAuth();

    const {id, partId} = useParams();

    const [state, setState] = useState(initialState);
    const {carBrand, carModel,carYear} = state;
    const [data, setData] = useState({});
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        onValue(ref(fireDB,'destructiveCars' ), (snapshot) => {
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

    useEffect(() => {
        if (id) {
            setState({ ...data[id] })
        } else {
            setState({ ...initialState})
        }
        return () => {
            setState({ ...initialState})
        }
       
    }, [id, data]);

    function fecthData () {
        onValue(ref(fireDB, `destructiveCars/${id}/carPartsCollection/savedCarParts/${partId}`), (snapshot) => {
            const data = snapshot.val();
            setNewData(data);
        });
    }
    
    useEffect(() => {
        fecthData();
    }, []);

    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent name='Detalės'>
                <div>
                <LinksButton redirectPath={`/autorized/car_parts`} name={'atgal'} />
                    <ul>
                 
                    <li>
                        <EditCarPartForm 
                            carId={id} 
                            carBrand={carBrand} 
                            carModel={carModel}
                            carYear={carYear}
                            carPartId={partId} 
                            carPartName={newData}
                        />
                    </li>  
                    </ul>
                </div>
            </DashboardContent>
        </Dashboard>
    )
}

export default EditCarPart;
