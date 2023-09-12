import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

export default function SignedLayout() {
  return (
    <div className="signed-layout collapse">
      <Header />
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
