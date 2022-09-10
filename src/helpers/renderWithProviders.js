import React from 'react';
import { render } from '@testing-library/react';
import UsersProvider from 'providers/UsersProvider';

export const renderWithProviders = (children) => {
  return render(<UsersProvider>{children}</UsersProvider>);
};
