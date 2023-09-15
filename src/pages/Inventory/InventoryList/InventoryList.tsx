import { Factory } from '../../../style/svg/inventory';
import InventoryListTable from './table/InventoryListTable';
import NormalSearch from '../../../components/search/NormalSearch';
import IconDropdown from '../../../components/dropdown/IconDropdown';

export default function InventoryList() {
  return (
    <div className="inventory-list">
      <div className="inventory-list-header">
        <h5>Inventory list</h5>
        <IconDropdown icon={<Factory />}>
          <select>
            <option>Hello</option>
            <option>Hi</option>
          </select>
        </IconDropdown>
        <NormalSearch />
      </div>
      <InventoryListTable />
    </div>
  );
}
