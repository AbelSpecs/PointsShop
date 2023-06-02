import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AeroCard from './AeroCard';

describe('<AeroCard />', () => {
  test('it should mount', () => {
    render(<AeroCard />);
    
    const aeroCard = screen.getByTestId('AeroCard');

    expect(aeroCard).toBeInTheDocument();
  });
});