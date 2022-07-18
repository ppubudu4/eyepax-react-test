import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const authState = useSelector((state) => state.auth);
  if (authState?.authenticated) {
    return children;
  }
  return <Navigate to='/login' />;
};

export default ProtectedRoute;
