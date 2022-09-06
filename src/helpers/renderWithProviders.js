import React from 'react';
import { render } from '@testing-library/react';
import UsersProvides from 'providers/UsersProvides';

export const renderWithProviders = (children) => {
  return render(<UsersProvides>{children}</UsersProvides>);
};
