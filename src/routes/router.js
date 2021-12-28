import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '.';
import CarPartDetails from '../webBackSide/CarpartsList.js/CarPartDetails';
import Dashboard from '../webBackSide/pages/DashboardHome';
import Team from '../webBackSide/pages/Team';
import About from '../webFrontPages/About/About';
import Companies from '../webFrontPages/Companies';
import Contact from '../webFrontPages/Contacts/Contact';
import Home from '../webFrontPages/Home/Home';
import Login from '../webFrontPages/Login/Login';
import Register from '../webFrontPages/Register/Register';

const router = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path={ROUTES.DEFAULT} element={<Home />} />
        <Route path={ROUTES.CAR_PART_DETAILS} element={<CarPartDetails />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.COMPANIES} element={<Companies />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.TEAM} element={<Team />} />
        </Routes>
    </BrowserRouter>
  );
};

export default router;
