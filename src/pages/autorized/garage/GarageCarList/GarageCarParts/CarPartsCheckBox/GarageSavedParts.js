import React, { useEffect, useState } from 'react';
import { fireDB } from '../../../../../../server/firebase-config';
import { useParams } from 'react-router-dom';
import { onValue, ref } from 'firebase/database';
import Dashboard from '../../../../../../components/Dashboard';
import DashboardContent from '../../../../../../components/DashboardContent';
import SingleCard from '../../../../../../components/SingleCard';
import { useUserAuth } from '../../../../../../context/UserAuthContext';
import LinksButton from '../../../../../../components/LinksButton';
import './packList.css';

const initialState = {
    carBrand: '',
    carModel: '',
    carYear: '',
    status: ''
}

function GarageSavedParts() {
    const { user, logOut } = useUserAuth();

    const {id} = useParams();

    const [state, setState] = useState(initialState);
    const {carBrand, carModel} = state;
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
        onValue(ref(fireDB, `destructiveCars/${id}/carPartsCollection/savedCarParts`), (snapshot) => {
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
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent name='Gara??as'>
            <section className='section-one-card'> 
                <SingleCard title={`S??ra??o Id : ${id}`}>
                    <LinksButton redirectPath={`/autorized/garage/car_parts/${id}`} name={`atgal prie ${carBrand} detali??`} />
                    <h3 style={{ padding: '30px 0 0', width: '100%', textAlign: 'center' }}>
                        {carBrand} {carModel} - i??imtos detal??s :
                    </h3>   
                    <ul className='parts-list-container'>
                        <li className='parts-list-title'>
                            <span className='parts-info-container'>Nr.</span>
                            <span className='parts-info-container-center'>Detal??s</span>
                        </li>
                        {
                            newData.map((item, partId) => {
                                return(
                                    <>
                                        <li key={partId} className='saved-part-box'>
                                            <span className='saved-part-box-span'>{partId + 1}.</span>
                                            <span className='saved-part-box-span'>{item}</span>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </SingleCard>
            </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default GarageSavedParts;
