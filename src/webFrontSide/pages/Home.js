import React from 'react';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import CarParts from '../../webBackSide/CarpartsList.js/CarParts';

const Home = () => {
  return (
    <>
      <Header />
      <main className="frontSide-main">
        <section className="hero">
          <h2>
            Naudotos automobilių dalys internetu
          </h2>
          <div className='container'>
            <SearchInput />
          </div>
        </section>
        <section className="container">
          <CarParts />
        </section>
      </main>
    </>
  );
};

export default Home;
