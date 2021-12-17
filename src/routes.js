import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));

const routes = [
  <Route key="home" path="/" element={<Home />} />,
]

export default routes;
