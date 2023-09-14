import React, { lazy, Suspense } from 'react';

const LazyNoPointsCard = lazy(() => import('./NoPointsCard'));

const NoPointsCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNoPointsCard {...props} />
  </Suspense>
);

export default NoPointsCard;
