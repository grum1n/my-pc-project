import React from 'react';
import './styles/frontStyle.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './webFrontPages/Home/Home';
import Login from './webFrontPages/Login/Login';
import Register from './webFrontPages/Register/Register';
import DashboardHome from './webBackSide/pages/DashboardHome';
import Team from './webBackSide/pages/Team';
import Footer from './components/Footer';
import About from './webFrontPages/About/About';
import Lauzynai from './webFrontPages/Lauzynai/Lauzynai';
import Contact from './webFrontPages/Contacts/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/lauzynai' element={<Lauzynai />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<DashboardHome />} />
        <Route path='/team' element={<Team />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
