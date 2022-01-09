import React from 'react';
import HeroSearch from '../../../components/HeroSearch';
import CarParts from '../../../components/CarpartsList.js/CarParts';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <HeroSearch heading='Naudotos automobilių detalės' />
      <section className='container'>
        <CarParts />
      </section>
      <Footer />
    </>
  )
}
 
export default Home;
 