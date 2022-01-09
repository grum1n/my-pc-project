import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '.';
import Home from '../pages/public/home';
import About from '../pages/public/about';
import Companies from '../pages/public/companies';
import Contact from '../pages/public/contacts';
import Login from '../pages/public/login';
import Register from '../pages/public/register';
import Team from '../pages/autorized/team';
import DashboardHome from '../pages/autorized/DashboardHome';
import ProtectedRoute from './ProtectedRoute';
import { UserAuthContextProvider } from '../context/UserAuthContext';

function Router () {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path={ROUTES.PUBLIC_DEFAULT} element={<Home />} />
          <Route path={ROUTES.PUBLIC_ABOUT} element={<About />} />
          <Route path={ROUTES.PUBLIC_COMPANIES} element={<Companies />} />
          <Route path={ROUTES.PUBLIC_CONTACT} element={<Contact />} />
          <Route path={ROUTES.PUBLIC_LOGIN} element={<Login />} />
          <Route path={ROUTES.PUBLIC_REGISTER} element={<Register />} />
          <Route path={ROUTES.AUTORIZED_DASHBOARD_HOME} element={
            <ProtectedRoute>
              <DashboardHome />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.AUTORIZED_TEAM} element={
            <ProtectedRoute>
              <Team />
            </ProtectedRoute>
          } />
        </Routes>
      </UserAuthContextProvider>
    </>
        
  );
}

export default Router;
