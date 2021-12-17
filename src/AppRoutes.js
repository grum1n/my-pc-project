import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './webFrontSide/pages/Home';

const AppRoutes = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
  );
};

export default AppRoutes;
