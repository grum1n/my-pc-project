import React, { useEffect, useState } from "react";
import { fireDB } from '../../../../server/firebase-config';
import { useUserAuth } from '../../../../context/UserAuthContext';
import { onValue, push, ref, set } from "firebase/database";
import './updateCar.css';
import Dashboard from '../../../../components/Dashboard';
import DashboardContent from '../../../../components/DashboardContent';
import SingleCard from '../../../../components/SingleCard';
import { useNavigate, useParams } from "react-router-dom";
import LinksButton from '../../../../components/LinksButton';

const initialState = {
    carBrand: '',
    carModel: '',
    carYear: '',
    status: ''
}

function UpdateCarInfo() {
    const { user, logOut } = useUserAuth();

    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    const {carBrand, carModel, carYear, status} = state;

    const navigate = useNavigate();

    const {id} = useParams();
    
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

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({ ...state, [name]: value }) ;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!carBrand || !carModel || !carYear || !status) {
            alert('Prašome užpildyti visus laukelius ')
        } else {
            if (!id) {
               push(ref(fireDB, 'destructiveCars'),state, (err) => {
                    if (err) {
                       alert(err);
                    } else {
                        alert('Paletė pridėta į sąrašą ;)');
                    }
                });
            }
             else {
                set(ref(fireDB, `destructiveCars/${id}`), state, (err) => {
                    if (err) {
                        alert(err);
                    } else {
                        alert('Paletės informacija atnaujinta');
                    }
    
                });
             }
            setTimeout(() =>  navigate('/autorized/cars'), 500);
        }
    }
       
    return (
        <Dashboard userEmail={user.email} logOut={logOut}>
            <DashboardContent name='Automobiliai'>
            <section className='section-one-card'> 
                <SingleCard title='Atnaujinti auto duomenis'>
                    <LinksButton redirectPath={`/autorized/cars`} name={'atgal'} />
                    <form  className='add-car-form' onSubmit={handleSubmit}>
                        <div className='add-car-input-box'>
                            <label htmlFor='carBrand'>Markė</label>
                            <input 
                                type='text'
                                id='carBrand'
                                name='carBrand'
                                placeholder='Markė.. '
                                value={carBrand || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='add-car-input-box'>
                            <label htmlFor='carModel'>Modelis</label>
                            <input 
                                type='text'
                                id='carModel'
                                name='carModel'
                                placeholder='Modelis.. '
                                value={carModel || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='add-car-input-box'>
                            <label htmlFor='contact'>Metai</label>
                            <input 
                                type='number'
                                id='carYear'
                                name='carYear'
                                placeholder='Metai.. '
                                value={carYear || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='add-car-input-box'>
                            <label htmlFor='status'>Statusas</label>
                            <input 
                                type='text'
                                id='status'
                                name='status'
                                placeholder='Statusas.. '
                                value={status || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <input  type='submit' value='Atnaujinti' className='add-car-submit' />
                    </form>
                </SingleCard>
            </section>
            </DashboardContent>
        </Dashboard>
    )
}

export default UpdateCarInfo;