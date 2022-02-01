import React, { useEffect, useState } from 'react';
import { fireDB } from '../../../../../server/firebase-config';
import { useParams } from 'react-router-dom';
import { onValue, ref } from 'firebase/database';
import Dashboard from '../../../../../components/Dashboard';
import DashboardContent from '../../../../../components/DashboardContent';
import SingleCard from '../../../../../components/SingleCard';
import { useUserAuth } from '../../../../../context/UserAuthContext';
import LinksButton from '../../../../../components/LinksButton';
import EditCarPartForm from './EditForm';

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
            <DashboardContent name='Car Parts'>
            <section className='section-one-card'> 
                <SingleCard title={`Edit car part page`}>
                    <LinksButton redirectPath={`/autorized/car_parts`} name={'Go back to Prepared Car Parts'} />
                    <h3 style={{ padding: '30px 0 0', width: '100%', textAlign: 'center' }}>
                        {carBrand} {carModel} {carYear}
                    </h3>   
                    <ul className='parts-list-container'>
                    <li className='parts-list-title'>
                        {newData}
                    </li>
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
                </SingleCard>
            </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default EditCarPart;
