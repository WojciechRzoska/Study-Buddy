import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Form Field', () => {
  it('Render the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), {
      target: { value: 'Patryk' },
    });
    fireEvent.change(screen.getByTestId('Attendance'), {
      target: { value: '60%' },
    });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4' } });
    fireEvent.click(screen.getByText('Add student'));
    screen.getByText('Patryk');
  });
});
