import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './routes/router';
import './styles/frontStyle.css';
import { BrowserRouter } from 'react-router-dom';

function App () {
  return (
    <>
    <BrowserRouter>
      <Header />
      <main className='frontSide-main'>
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
    </>
  );
};

export default App;
