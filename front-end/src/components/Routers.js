import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Report from './Report';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/register" element={ <Register />} />
      <Route path="/login" element={ <Login />} />
      <Route path="/report" element={ <Report />} />
    </Routes>
  );
}

export default Routers;