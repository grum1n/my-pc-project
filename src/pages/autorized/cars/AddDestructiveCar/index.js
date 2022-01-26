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
            <form  className='add-car-form'onSubmit={handleSubmit}>
                <div className='add-car-input-box'>
                    <label htmlFor='carBrand'>Brand</label>
                    <input 
                        type='text'
                        id='carBrand'
                        name='carBrand'
                        placeholder='Car brand.. '
                        value={carBrand || ''}
                        onChange={handleInput}
                    />
                </div>
                <div className='add-car-input-box'>
                    <label htmlFor='carModel'>Model</label>
                    <input 
                        type='text'
                        id='carModel'
                        name='carModel'
                        placeholder='Car model.. '
                        value={carModel || ''}
                        onChange={handleInput}
                    />
                </div>
                <div className='add-car-input-box'>
                    <label htmlFor='contact'>Year</label>
                    <input 
                        type='number'
                        id='carYear'
                        name='carYear'
                        placeholder='Car year.. '
                        value={carYear || ''}
                        onChange={handleInput}
                    />
                </div>
                <div className='add-car-input-box'>
                    <label htmlFor='status'>Status</label>
                    <input 
                        type='text'
                        id='status'
                        name='status'
                        placeholder='status.. '
                        value={status || ''}
                        onChange={handleInput}
                    />
                </div>
                <input  type='submit' value='Add car' className='add-car-submit' />
            </form>
        </section>
        
    )
}

export default AddDestructiveCar;