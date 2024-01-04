import 'modern-normalize';
import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
// import Tic from './comp/Tic-tac-toe2.js';
import FilterableProductTable from './comp/FilterableProductTable.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Home</h1>
        <Link to="/table">table</Link>
      </div>
    ),
  },
  {
    path: '/table',
    element: (
      <div>
        <FilterableProductTable />
        <Link to="/">Home</Link>
      </div>
    ),
  },
]);

createRoot(document.getElementById('app')).render(
  <RouterProvider router={router} />,
);
