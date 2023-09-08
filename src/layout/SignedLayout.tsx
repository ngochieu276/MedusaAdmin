import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function SignedLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
}
