import React from 'react';
import HeroSearch from '../../../components/HeroSearch';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
// import SearchCarPart from '../../autorized/DashboardHome/CarPartsList/SearchCarPart/SearchCarPartResult.js';
import SearchPartsResult from '../../../components/SearchPartsResult';
import ScrollButtonContainer from '../../../components/ScrollButton';
// import SearchCarPart from '../../autorized/DashboardHome/CarPartsList/SearchCarPart/SearchCarPartResult'
// import PublicSearchBox from './PublicSearchBox';

function PublicSearch() {
  return (
    <>
    <ScrollButtonContainer>
    <Header />
      <HeroSearch heading='Naudotos automobilių detalės' />
        <section className='container'>
        <SearchPartsResult />
        </section>
      <Footer />

    </ScrollButtonContainer>
     
    </>
  )
}
 
export default PublicSearch;