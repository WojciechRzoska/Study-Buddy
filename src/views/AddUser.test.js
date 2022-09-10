import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import '@testing-library/jest-dom';

describe('Form Field', () => {
  it('Adds new user to the list', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Grażyna' },
    });
    fireEvent.change(screen.getByLabelText('Attendance'), {
      target: { value: '55%' },
    });
    fireEvent.change(screen.getByLabelText('Average'), {
      target: { value: '4.5' },
    });
    fireEvent.click(screen.getByLabelText('Consent'));
    fireEvent.click(screen.getByText('Add student'));
    screen.getByText('Grażyna');
  });

  it('Prevents adding new user if the consent is not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Grażyna' },
    });
    fireEvent.change(screen.getByLabelText('Attendance'), {
      target: { value: '55%' },
    });
    fireEvent.change(screen.getByLabelText('Average'), {
      target: { value: '4.5' },
    });
    fireEvent.click(screen.getByText('Add student'));
    const newUser = screen.queryByText('Grażyna');
    expect(newUser).not.toBeInTheDocument();
  });
});
