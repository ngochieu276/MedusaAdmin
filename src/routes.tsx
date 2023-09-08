import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Product } from './pages/product';

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="product" element={<Product />} />
    </Route>
  )
);
