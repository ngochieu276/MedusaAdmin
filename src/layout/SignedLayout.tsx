import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function SignedLayout() {
  return (
    <div className="signed-layout">
      <Header />
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
