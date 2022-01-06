import React from 'react';
import HeroSearch from '../../../components/HeroSearch';
import CarParts from '../../../components/CarpartsList.js/CarParts';
import Footer from '../../../components/Footer';

function Home() {
  return (
    <>
      <HeroSearch heading='Naudotos automobilių detalės' />
      <section className='container'>
        <CarParts />
      </section>
      <Footer />
    </>
  )
}
 
export default Home;
 