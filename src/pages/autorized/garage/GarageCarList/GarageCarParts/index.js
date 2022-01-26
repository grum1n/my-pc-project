import React, { useEffect, useState } from "react";
import { fireDB } from "../../../../../server/firebase-config";
import { useUserAuth } from '../../../../../context/UserAuthContext';

import Dashboard from '../../../../../components/Dashboard';
import DashboardContent from '../../../../../components/DashboardContent';
import SingleCard from '../../../../../components/SingleCard';
import CarPartsCheckBox from "./CarPartsCheckBox";
import LinksButton from "../../../../../components/LinksButton";
import { useParams } from "react-router-dom";
import { onValue, ref } from "firebase/database";

const initialState = {
    carBrand: '',
    carModel: '',
    carYear: '',
    status: ''
}


function GarageCarParts() {
    const { user, logOut } = useUserAuth();

    const {id} = useParams();

    const [state, setState] = useState(initialState);
    const {carBrand, carModel} = state;
    const [data, setData] = useState({});

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
   
    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent name='Garage'>
            <section className='section-one-card'> 
                <SingleCard title={`${carBrand}  ${carModel} parts : `}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <LinksButton redirectPath={`/autorized/garage`} name={'Go back to Destructive Cars List'} />
                        <LinksButton redirectPath={`/autorized/garage/saved_parts/${id}`} name={'Saved parts list'} />
                    </div>
                    <hr />  
                    <CarPartsCheckBox />
                </SingleCard>
            </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default GarageCarParts;