import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AeroNavbar from './AeroNavbar';

describe('<AeroNavbar />', () => {
  test('it should mount', () => {
    render(<AeroNavbar />);
    
    const aeroNavbar = screen.getByTestId('AeroNavbar');

    expect(aeroNavbar).toBeInTheDocument();
  });
});