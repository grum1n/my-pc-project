import React from 'react';
import './styles/frontStyle.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './webFrontSide/components/Header';
import Home from './webFrontSide/pages/Home';
import Login from './webFrontSide/pages/Login';
import Register from './webFrontSide/pages/Register';
import Dashboard from './webBackSide/pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
