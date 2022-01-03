import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '.';
import Home from '../pages/public/home';
import About from '../pages/public/about';
import Companies from '../pages/public/companies';
import Contact from '../pages/public/contacts';
import Login from '../pages/public/login';
import Register from '../pages/public/register';
import Dashboard from '../pages/autorized/dashboardHome';
import Team from '../pages/autorized/team';

function Router () {
  return (
        <Routes>
          <Route path={ROUTES.DEFAULT} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.COMPANIES} element={<Companies />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.TEAM} element={<Team />} />
        </Routes>
  );
}

export default Router;
