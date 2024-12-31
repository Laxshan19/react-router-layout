import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <h3>wrong password</h3>;
};

export default ProtectedRoute;
