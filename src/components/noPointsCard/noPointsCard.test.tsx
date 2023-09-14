import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NoPointsCard from './NoPointsCard';

describe('<NoPointsCard />', () => {
  test('it should mount', () => {
    render(<NoPointsCard />);
    
    const noPointsCard = screen.getByTestId('NoPointsCard');

    expect(noPointsCard).toBeInTheDocument();
  });
});