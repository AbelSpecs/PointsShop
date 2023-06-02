import React, { lazy, Suspense } from 'react';

const LazyAeroCard = lazy(() => import('./AeroCard'));

const AeroCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAeroCard {...props} />
  </Suspense>
);

export default AeroCard;
