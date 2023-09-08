import { createBrowserRouter, createRoutesFromElements, Route, redirect } from 'react-router-dom';

import { Home } from './pages/home';
import { Product } from './pages/product';
import SignedLayout from './layout/SignedLayout';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <SignedLayout />,
    children: [
      {
        path: 'product',
        element: <Product />,
      },
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);
