import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PointsCard from './PointsCard';

describe('<PointsCard />', () => {
  test('it should mount', () => {
    render(<PointsCard />);
    
    const pointsCard = screen.getByTestId('PointsCard');

    expect(pointsCard).toBeInTheDocument();
  });
});