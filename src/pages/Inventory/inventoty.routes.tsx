import { NavPath } from '../../dto';
import { InventoryPath } from '../../dto/inventory.dto';

import Inventory from './Inventory';
import InventoryList from './InventoryList/InventoryList';
import Locations from './Locations/Locations';
import PurchaseOrders from './PurchaseOrders/PurchaseOrders';
import Suppliers from './Suppliers/Suppliers';
import Transfers from './Transfers/Transfers';

import { Navigate } from 'react-router-dom';

export default [
  {
    path: NavPath.Inventory,
    element: <Inventory />,
    children: [
      {
        path: InventoryPath.InventoryList,
        element: <InventoryList />,
      },
      {
        path: InventoryPath.Locations,
        element: <Locations />,
      },
      {
        path: InventoryPath.Transfers,
        element: <Transfers />,
      },
      {
        path: InventoryPath.Suppliers,
        element: <Suppliers />,
      },
      {
        path: InventoryPath.PurchaseOrders,
        element: <PurchaseOrders />,
      },
      {
        path: '',
        element: <Navigate to={InventoryPath.InventoryList} />,
      },
    ],
  },
];
