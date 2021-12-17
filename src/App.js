import React from 'react';
import './styles/frontStyle.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './webFrontSide/pages/Home';
import Login from './webFrontSide/pages/Login';
import Register from './webFrontSide/pages/Register';
import DashboardHome from './webBackSide/pages/DashboardHome';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
