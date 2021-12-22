import React, { useEffect, useState } from 'react';
import { db } from '../../server/firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const TestCarParts = () => {
  const [partsData, setPartsData] = useState([]);
  const carPartsCollectionRef = collection(db, 'partsData');

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(carPartsCollectionRef);
      // console.log(data);
      setPartsData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  });

  return (
    <>
      <ul className='car-part-box'>
        {partsData.map((part, index) => {
          return (
            <>
              <li className='car-part-photo-box'>
                <div className='col-1 photo-box' >
                  <span className='item-date'>2021</span>
                </div>
              </li>
              <li className='car-part-info'>
                <h3 className='col-2 carPart'>{part.carPart}</h3>
                <p className='col-3 carTitle'>Markė : {part.carTitle}</p>
                <p className='col-4 carPartcode'>Detalės kodas : {part.carPartcode}</p>
                <p className='col-4 partID'>sandėlio nr.: {part.partID}</p>
                <p className='col-4 carPartPrice'>Kaina : {part.carPartPrice}</p>
              </li>
            </>
          );
        })}
      </ul>
      {/*
      <div key={index}>
              {' '}
              <h1>Detalė: {part.carPart}</h1>
              <h1>Age: {part.carPartPrice}</h1>
            </div>
      <ul className='car-part-box'>
              <li className='car-part-photo-box'>
                <div className='col-1 photo-box' >
                  <span className='item-date'>{partsdb.getFullYear()}</span>
                </div>
              </li>
              <li className='car-part-info'>
                <h3 className='col-2 carPart'>{partsdb.carPart}</h3>
                <p className='col-3 carTitle'>Markė : {partsdb.carTitle}</p>
                <p className='col-4 carPartcode'>Detalės kodas : {partsdb.carPartcode}</p>
                <p className='col-4 partID'>sandėlio nr.: {partsdb.partID}</p>
                <p className='col-4 carPartPrice'>Kaina : {partsdb.carPartPrice}</p>
              </li>
            </ul> */}
    </>
  );
};

export default TestCarParts;
