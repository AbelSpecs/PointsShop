import React, { lazy, Suspense } from 'react';

const LazyDock = lazy(() => import('./Dock'));

const Dock = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDock {...props} />
  </Suspense>
);

export default Dock;
