import React, { lazy, Suspense } from 'react';

const LazyFilter = lazy(() => import('./Filter'));

const Filter = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFilter {...props} />
  </Suspense>
);

export default Filter;
