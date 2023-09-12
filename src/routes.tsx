import { createBrowserRouter } from 'react-router-dom';

import { Home } from './pages/home';
import Search from './pages/Search/Search';
import Notification from './pages/Notification/Notification';
import Product from './pages/product/Product';
import Customer from './pages/Customers/Customer';
import Orders from './pages/Orders/Orders';
import Inventory from './pages/Inventory/Inventory';
import Promotions from './pages/Promotions/Promotions';
import GiftCards from './pages/GiftCards/GiftCards';
import Pricing from './pages/Pricing/Pricing';
import Settings from './pages/Settings/Settings';

import SignedLayout from './layout/SignedLayout';
import { NavPath } from './dto';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <SignedLayout />,
    children: [
      {
        path: NavPath.Search,
        element: <Search />,
      },
      {
        path: NavPath.Notification,
        element: <Notification />,
      },
      {
        path: NavPath.Products,
        element: <Product />,
      },
      {
        path: NavPath.Customers,
        element: <Customer />,
      },
      {
        path: NavPath.Orders,
        element: <Orders />,
      },
      {
        path: NavPath.Inventory,
        element: <Inventory />,
      },
      {
        path: NavPath.Promotions,
        element: <Promotions />,
      },
      {
        path: NavPath.GiftCards,
        element: <GiftCards />,
      },
      {
        path: NavPath.Pricing,
        element: <Pricing />,
      },
      {
        path: NavPath.Settings,
        element: <Settings />,
      },
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);
