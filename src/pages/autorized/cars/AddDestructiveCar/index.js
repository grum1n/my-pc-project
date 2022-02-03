import React,  {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fireDB } from '../../../../server/firebase-config';
import { onValue, push, ref, set } from 'firebase/database';
import './adddestructiveCar.css';

const initialState = {
    carBrand: '',
    carModel: '',
    carYear: '',
    status: ''
}

function AddDestructiveCar() {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    const {carBrand, carModel, carYear, status} = state;

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

    const handleInput = (e) => {
        const {name, value} = e.target;
        setState({ ...state, [name]: value }) ;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!carBrand || !carModel || !carYear || !status) {
           alert('Please provide value in each input field')
        } else {
            if (!id) {
               push(ref(fireDB, 'destructiveCars'),state, (err) => {
                    if (err) {
                        alert(err);
                    } else {
                        alert('Contact added successfully ;)');
                    }
                });
            }
             else {
                set(ref(fireDB, `destructiveCars/${id}`), state, (err) => {
                    if (err) {
                        alert(err);
                    } else {
                        alert('Contact updated successfully');
                    }
    
                });
             }
        }
    }

    return (
        <section>
            <form  className='addCarForm' onSubmit={handleSubmit}>
                <div className='add-car-input-box'>
                    <label htmlFor='carBrand'>Markė</label>
                    <input 
                        type='text'
                        id='carBrand'
                        name='carBrand'
                        placeholder='Markė.. '
                        value={carBrand || ''}
                        onChange={handleInput}
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
                        onChange={handleInput}
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
                        onChange={handleInput}
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
                        onChange={handleInput}
                    />
                </div>
                <div className='add-car-input-box'>
                        <input  type='submit' value='Pridėti auto' className='add-car-submit' />
                </div>
            </form>
        </section>
    )
}

export default AddDestructiveCar;