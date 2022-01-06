import React from 'react';
import Header from './components/Header';
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
    </BrowserRouter>
    </>
  );
}

export default App;
