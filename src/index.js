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

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: 'about',
    element: (
      <div>
        About
        <Link to="/">Home</Link>
      </div>
    ),
  },
]);

createRoot(document.getElementById('app')).render(
  <RouterProvider router={router} />,
);
