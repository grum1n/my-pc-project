import React from 'react';
import './home.css';
import CarParts from '../../../components/CarpartsList.js/CarParts';

export default function Home () {
  return (
    <>
      <section className='hero'>
        <h2>
          Naudotos automobilių dalys internetu
        </h2>
          {/* <div className='container'>
            <SearchInput />
          </div> */}
      </section>
      <section className='container'>
        <CarParts />
      </section>
    </>
  );
}
