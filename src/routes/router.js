import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '.';
import Home from '../pages/public/home';
import About from '../pages/public/about';
import Companies from '../pages/public/companies';
import Contact from '../pages/public/contacts';
import Login from '../pages/public/login';
import Register from '../pages/public/register';
import TeamGroup from '../pages/autorized/teamGroup';
import Custumers from '../pages/autorized/custumers';
import Cars from '../pages/autorized/cars';
import Settings from '../pages/autorized/settings';
import Charts from '../pages/autorized/charts';
import DashboardHome from '../pages/autorized/DashboardHome';
import ProtectedRoute from './ProtectedRoute';
import { UserAuthContextProvider } from '../context/UserAuthContext';
import UpdateCarInfo from '../pages/autorized/cars/UpdateCarInfo';
import Garage from '../pages/autorized/garage';
import GarageCarParts from '../pages/autorized/garage/GarageCarList/GarageCarParts';
import GarageSavedParts from '../pages/autorized/garage/GarageCarList//GarageCarParts/CarPartsCheckBox/GarageSavedParts';
import SavedCarParts from '../pages/autorized/cars/SavedCarParts';
import CarParts from '../pages/autorized/carParts';
import EditCarPart from '../pages/autorized/carParts/preparedCarParts/EditCarPart';
import CarSearchResult from '../pages/autorized/cars/SearchCar/CarSearchResult';

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
          <Route path={ROUTES.AUTORIZED_TEAM_GROUP} element={
            <ProtectedRoute>
              <TeamGroup />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.AUTORIZED_CUSTUMERS} element={
            <ProtectedRoute>
              <Custumers />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.AUTORIZED_CARS} element={
            <ProtectedRoute>
              <Cars />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.AUTORIZED_UPDATE_DESTRYCTIVE_CAR_INFO} element={
            <ProtectedRoute>
              <UpdateCarInfo />
            </ProtectedRoute>
          } />
           <Route path={ROUTES.AUTORIZED_CARS_SEARCH} element={
            <ProtectedRoute>
              <CarSearchResult />
            </ProtectedRoute>
          } />
           <Route path={ROUTES.AUTORIZED_SAVED_CAR_PARTS} element={
            <ProtectedRoute>
              <SavedCarParts />
            </ProtectedRoute>
          } />
            <Route path={ROUTES.AUTORIZED_GARAGE} element={
            <ProtectedRoute>
              <Garage />
            </ProtectedRoute>
          } />
           <Route path={ROUTES.AUTORIZED_GARAGE_CAR_PARTS} element={
            <ProtectedRoute>
              <GarageCarParts />
            </ProtectedRoute>
          } />
           <Route path={ROUTES.AUTORIZED_GARAGE_SAVED_PARTS} element={
            <ProtectedRoute>
              <GarageSavedParts />
            </ProtectedRoute>
          } />
           <Route path={ROUTES.AUTORIZED_CAR_PARTS} element={
            <ProtectedRoute>
              <CarParts />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.AUTORIZED_CAR_PART_EDIT} element={
            <ProtectedRoute>
              <EditCarPart />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.AUTORIZED_SETTINGS} element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.AUTORIZED_CHARTS} element={
            <ProtectedRoute>
              <Charts />
            </ProtectedRoute>
          } />
        </Routes>
      </UserAuthContextProvider>
    </>
        
  );
}

export default Router;
