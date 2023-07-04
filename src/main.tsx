/* eslint-disable react-refresh/only-export-components */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import 'styles/index.scss';

const App = React.lazy(() => import('scripts/App'));
const NotFound = React.lazy(() => import('scripts/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense><App /></Suspense>,
  },
  {
    path: '*',
    element: <Suspense><NotFound /></Suspense>,
  },
]);

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
