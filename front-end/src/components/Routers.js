import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Register from './Register';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/user" /> } />
      <Route path="/user" element={ <Register />} />
    </Routes>
  );
}

export default Routers;