import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { fireDB } from '../../server/firebase-config';
import './cards.css';

function Cards() {
    const [countCustomers, setCountCustomers] = useState([]);
    const [countCarParts, setCountCarParts] = useState([]);
    const [countCars, setCountCars] = useState([]);

    useEffect(() => {
      onValue(ref(fireDB, `/customers`), (snapshot) => {
          setCountCustomers([]);
          const data = snapshot.val([]);
          
          if(data !== null) {
            Object.values(data).map((CountCustomer) => {
              setCountCustomers((oldArray) => [ ...oldArray, CountCustomer]);
            });
          }
      });
    }, []);

    useEffect(() => {
        onValue(ref(fireDB, `/carParts`), (snapshot) => {
            setCountCarParts([]);
            const data = snapshot.val([]);
            
            if(data !== null) {
              Object.values(data).map((carPart) => {
                setCountCarParts((oldArray) => [ ...oldArray, carPart]);
              });
            }
        });
      }, []);

      useEffect(() => {
        onValue(ref(fireDB, `/destructiveCars`), (snapshot) => {
            setCountCars([]);
            const data = snapshot.val([]);
            
            if(data !== null) {
              Object.values(data).map((car) => {
                setCountCars((oldArray) => [ ...oldArray, car]);
              });
            }
        });
      }, []);
   
    return (
        <div className='cards'>
                <div className='card-single'>
                    <div>
                        <h3>{countCars.length}</h3>
                        <span>Cars</span>
                    </div>
                    <div>
                        <span className=''><FaIcons.FaCar /></span>
                    </div>
                </div>
                <div className='card-single'>
                <div>
                    <h3>{countCarParts.length}</h3>
                    <span>Car Parts</span>
                </div>
                <div>
                    <span className=''><FaIcons.FaReceipt /></span>
                </div>
                </div>
                <div className='card-single'>
                    <div>
                        <h3>{countCustomers.length}</h3>
                        <span>Customers</span>
                    </div>
                    <div>
                        <span className=''><FaIcons.FaUsers /></span>
                    </div>
                </div>
                <div className='card-single'>
                <div>
                    <h3>&euro;17k</h3>
                    <span>Price of parts</span>
                </div>
                <div>
                    <span className=''><FaIcons.FaWallet /></span>
                </div>
                </div>
            </div>
    )
}

export default Cards
