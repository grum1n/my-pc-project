import React from 'react';
import './styles/frontStyle.css';
import Header from './webFrontSide/components/Header';
import AppRoutes from './AppRoutes';
import Footer from './webFrontSide/components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <AppRoutes/>
      </main>
      <Footer />
    </div>
  );
};

export default App;
