import { NavLink, Outlet } from 'react-router-dom';
import { InventoryPath } from '../../dto/inventory.dto';

const navList = [
  {
    path: `${InventoryPath.InventoryList}`,
    label: 'Inventory list',
  },
  {
    path: `${InventoryPath.Locations}`,
    label: 'Locations',
  },
  {
    path: `${InventoryPath.Transfers}`,
    label: 'Transfers',
  },
  {
    path: `${InventoryPath.Suppliers}`,
    label: 'Suppliers',
  },
  {
    path: `${InventoryPath.PurchaseOrders}`,
    label: 'Purchase orders',
  },
];

export default function Inventory() {
  return (
    <section className="inventory">
      <nav>
        {navList.map((nav) => {
          return (
            <NavLink to={nav.path}>
              <div>
                <label>{nav.label}</label>
              </div>
            </NavLink>
          );
        })}
      </nav>
      <Outlet />
    </section>
  );
}
