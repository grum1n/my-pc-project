import React from 'react';
import './companies.css';
import { CompaniesData } from '../../../components/CompaniesList.js/CompaniesData';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import ScrollButtonContainer from '../../../components/ScrollButton';

const Companies = () => {
  return (
    <>
    <ScrollButtonContainer>
    <Header />
      <Hero heading='Laužynai' />
            <div className='container'>
              <ul>
                {CompaniesData.map((companie) => {
                  return (
                    <>
                    <li className='companies-info'>
                      <h3>{companie.companiesLocation}</h3>
                      <div className='companies-info-div'>
                        <p className='companies-name'>{companie.companiesName}</p>
                        <p className='companies-adress'><FaIcons.FaMapMarkedAlt className='companies-icons'/>{companie.companiesAddress}</p>
                        <p><FaIcons.FaEnvelope className='companies-icons' />{companie.companiesEmail}</p>
                        <p><FaIcons.FaPhoneAlt className='companies-icons' />{companie.companiesPhone}</p>
                        <p>Platformoje dalyvis nuo: {companie.registerDate}</p>
                      </div>
                      <div className='search-parts'>
                        <h4>Detalių kiekis: {companie.partsNumber}</h4>
                        <Link to='/'>Detalių paieška</Link>
                      </div>
                    </li>
                    </>
                  );
                })
                }
              </ul>
            </div>
            <Footer />

    </ScrollButtonContainer>
    
    </>
  );
};

export default Companies;
