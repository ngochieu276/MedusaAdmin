import { toggleCollapse } from '../store/reducer/layout';
import { useDispatch } from 'react-redux';

export default function Sidebar() {
  const dispatch = useDispatch();

  return (
    <nav className="sidebar">
      Sidebar
      <button onClick={() => dispatch(toggleCollapse())}>Toggle</button>
    </nav>
  );
}
