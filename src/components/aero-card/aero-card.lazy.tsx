import React, { lazy, Suspense } from 'react';

const LazyAeroCard = lazy(() => import('./aero-card'));

const AeroCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAeroCard {...props} />
  </Suspense>
);

export default AeroCard;
