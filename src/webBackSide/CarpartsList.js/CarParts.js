import React, { useEffect, useState } from 'react';
import { db } from '../../server/firebase-config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import './carParts.css';

const CarParts = () => {
  const [partsData, setPartsData] = useState([]);
  const carPartsCollectionRef = collection(db, 'partsData');

  const deleteCarPart = async (partID) => {
    const carPartDoc = doc(db, 'partsData', partID);
    await deleteDoc(carPartDoc);
  };

  useEffect(() => {
    const detCarParts = async () => {
      const data = await getDocs(carPartsCollectionRef);
      setPartsData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    detCarParts();
  }, []);

  return (
    <>
    <ul className='parts-list'>
        {partsData.map((part) => {
          return (
            <>
            <li className='part-container flex-between'>
              <div className='part-container-photo'><span className='part-container-date'>data 2021</span></div>
              <div className='part-container-info'>
                <h3 className='part-name'>{part.carPart}</h3>
                <p>{part.carTitle}</p>
                <p>Detalės  ar gamintojo kodas : {part.carPartcode}</p>
                <p>{part.partID}</p>
                <p><button onClick={() => { deleteCarPart(part.id); }}>Delete Car part</button></p>
              </div>
              <div className='part-container-price flex-alignitem-center'>
                <p>Price: {part.carPartPrice}</p>
              </div>
            </li>
            </>
          );
        })}
    </ul>
    </>
  );
};

export default CarParts;
