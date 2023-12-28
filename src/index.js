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
import Tic from './comp/Tic-tac-toe2.js';
import './comp/Tic-tac-toe2.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Home</h1>
        <Link to="tic">Tic-Tac-Toe</Link>
      </div>
    ),
  },
  {
    path: '/tic',
    element: (
      <div>
        <Tic />
        <Link to="/">Home</Link>
      </div>
    ),
  },
]);

createRoot(document.getElementById('app')).render(
  <RouterProvider router={router} />,
);
