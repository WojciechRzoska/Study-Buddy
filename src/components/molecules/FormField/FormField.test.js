import React from 'react';
import { render } from '@testing-library/react';
import FormField from './FormField';

describe('Form Field', () => {
  it('Render the component', () => {
    render(<FormField label="name" name="name" id="name" />);
  });
});
