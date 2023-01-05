import { AuthProvider } from 'hooks/useAuth';
import { ErrorProvider } from 'hooks/useError';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ErrorProvider>
        <AuthProvider>{children}</AuthProvider>
      </ErrorProvider>
    </Router>
  );
};

export default AppProviders;
