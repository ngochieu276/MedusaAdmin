import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

import type { RootState } from '../store';
import { useSelector } from 'react-redux';

export default function SignedLayout() {
  const isCollapse = useSelector((state: RootState) => state.layout.isCollapse);
  return (
    <div className={`signed-layout ${isCollapse ? 'collapse' : ''}`}>
      <Header />
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
