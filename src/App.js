import React from 'react';
import './styles/frontStyle.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './webFrontPages/Home/Home';
import About from './webFrontPages/About/About';
import Companies from './webFrontPages/Companies';
import Contact from './webFrontPages/Contacts/Contact';
import Login from './webFrontPages/Login/Login';
import Register from './webFrontPages/Register/Register';
import DashboardHome from './webBackSide/pages/DashboardHome';
import Team from './webBackSide/pages/Team';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<DashboardHome />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
