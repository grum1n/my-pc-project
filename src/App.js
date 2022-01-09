import React from 'react';
import Router from './routes/router';
import './styles/frontStyle.css';
import { BrowserRouter } from 'react-router-dom';

function App () {
  return (
    <>
    <BrowserRouter>
      <main className='frontSide-main'>
        <Router />
      </main>
    </BrowserRouter>
    </>
  );
}

export default App;
