import React, { lazy, Suspense } from 'react';

const LazyAeroNavbar = lazy(() => import('./AeroNavbar'));

const AeroNavbar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAeroNavbar {...props} />
  </Suspense>
);

export default AeroNavbar;
