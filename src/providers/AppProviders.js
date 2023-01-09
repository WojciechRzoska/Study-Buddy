import { AuthProvider } from 'hooks/useAuth';
import { ErrorProvider } from 'hooks/useError';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ErrorProvider>
          <AuthProvider>{children}</AuthProvider>
        </ErrorProvider>
      </Router>
    </Provider>
  );
};

export default AppProviders;
