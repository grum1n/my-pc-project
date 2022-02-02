import React from 'react';
import HeroSearch from '../../../components/HeroSearch';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CarPartsList from '../../autorized/DashboardHome/CarPartsList';
import ScrollButtonContainer from '../../../components/ScrollButton';
import PageContextGoToTop from '../../../components/PageContextGoToTop';

function Home() {
  return (
    <>
    <ScrollButtonContainer>
      <Header />
      <PageContextGoToTop />
      <HeroSearch heading='Naudotos automobilių detalės' />
        <section className='container'>
          <CarPartsList />
        </section>
      <Footer />
    </ScrollButtonContainer>
    </>
  )
}
 
export default Home;
 