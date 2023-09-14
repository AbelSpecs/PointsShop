import React, { lazy, Suspense } from 'react';

const LazyPointsCard = lazy(() => import('./PointsCard'));

const PointsCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPointsCard {...props} />
  </Suspense>
);

export default PointsCard;
