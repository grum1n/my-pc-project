import React, { useState } from 'react';
import { db } from '../../../server/firebase-config.js';
import { collection, addDoc } from 'firebase/firestore';

const Addpart = () => {
  const [carTitle, setCarTitle] = useState('');
  const [carPart, setCarPart] = useState('');
  const [carPartCode, setCarPartCode] = useState('');
  const [carPartPrice, setCarPartPrice] = useState(0);

  const carPartsCollectionRef = collection(db, 'partsData');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addDoc(carPartsCollectionRef, {
      carTitle: carTitle,
      carPart: carPart,
      carPartCode: carPartCode,
      carPartPrice: Number(carPartPrice)
    });
    event.target.reset();
  };

  return (
        <form onSubmit={handleSubmit}>
            <h1>Pridėti detale, ji pasirodys front home page</h1>
            <input type='string' placeholder='Markė..' onChange={(event) => { setCarTitle(event.target.value); } } />
            <input type='string' placeholder='Detalė..' onChange={(event) => { setCarPart(event.target.value); } } />
            <input type='string' placeholder='Detalės kodas..' onChange={(event) => { setCarPartCode(event.target.value); } } />
            <input type='number' placeholder='Detalės kaina..' onChange={(event) => { setCarPartPrice(event.target.value); } } />
            <button type='submit'>Pridėti detale į sąrašą</button>
        </form>
  );
};

export default Addpart;