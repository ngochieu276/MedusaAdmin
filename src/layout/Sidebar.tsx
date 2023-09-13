import { NavLink } from 'react-router-dom';
import { toggleCollapse } from '../store/reducer/layout';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import {
  Search,
  Bell,
  Tag,
  Customer,
  Cart,
  Inventory,
  Promote,
  GiftCard,
  Pricing,
  Setting,
  BurgerMenu,
} from '../style/svg/sidebar';
import { NavPath } from '../dto';
import Avt from '../style/img/avt.jpg';

const navList = [
  {
    path: `/${NavPath.Search}`,
    label: 'Search',
  },
  {
    path: `/${NavPath.Notification}`,
    label: 'Notification',
  },
  {
    path: `/${NavPath.Products}`,
    label: 'Products',
  },
  {
    path: `/${NavPath.Customers}`,
    label: 'Customers',
  },
  {
    path: `/${NavPath.Orders}`,
    label: 'Orders',
  },
  {
    path: `/${NavPath.Inventory}`,
    label: 'Inventory',
  },
  {
    path: `/${NavPath.Promotions}`,
    label: 'Promotions',
  },
  {
    path: `/${NavPath.GiftCards}`,
    label: 'Gift Cards',
  },
  {
    path: `/${NavPath.Pricing}`,
    label: 'Pricing',
  },
  {
    path: `/${NavPath.Settings}`,
    label: 'Settings',
  },
];

export default function Sidebar() {
  const isCollapse = useSelector((state: RootState) => state.layout.isCollapse);
  const dispatch = useDispatch();

  const renderIcon = (path: string) => {
    if (path === `/${NavPath.Search}`) {
      return <Search />;
    } else if (path === `/${NavPath.Notification}`) {
      return <Bell />;
    } else if (path === `/${NavPath.Products}`) {
      return <Tag />;
    } else if (path === `/${NavPath.Customers}`) {
      return <Customer />;
    } else if (path === `/${NavPath.Orders}`) {
      return <Cart />;
    } else if (path === `/${NavPath.Inventory}`) {
      return <Inventory />;
    } else if (path === `/${NavPath.Promotions}`) {
      return <Promote />;
    } else if (path === `/${NavPath.GiftCards}`) {
      return <GiftCard />;
    } else if (path === `/${NavPath.Pricing}`) {
      return <Pricing />;
    } else if (path === `/${NavPath.Settings}`) {
      return <Setting />;
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-general">
        <div className="sidebar-avt">
          <img src={Avt} alt="avt" />
        </div>
        <i onClick={() => dispatch(toggleCollapse())}>
          <BurgerMenu />
        </i>
      </div>
      <div className={`sidebar-store ${isCollapse ? 'hidden' : ''}`}>
        <label>Store</label>
        <p>N2h Fabrics</p>
      </div>
      <nav>
        {navList.map((nav) => {
          return (
            <NavLink to={nav.path} className="sidebar-link">
              <div>
                {renderIcon(nav.path)}
                {!isCollapse && <label>{nav.label}</label>}
              </div>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
