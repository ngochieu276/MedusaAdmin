import { useState } from 'react';

import { Factory } from '../../../style/svg/inventory';
import InventoryListTable from './table/InventoryListTable';
import NormalSearch from '../../../components/search/NormalSearch';
import IconDropdown from '../../../components/dropdown/IconDropdown';
import CustomTablePagination from '../../../components/pagination/TablePagination';

export default function InventoryList() {
  const [page, setPage] = useState(2);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="inventory-list">
      <div className="inventory-list-header">
        <h5>Inventory list</h5>
        <IconDropdown icon={<Factory />}>
          <select>
            <option>Nordhavn warehouse</option>
            <option>Frederiksberg warehouse</option>
          </select>
        </IconDropdown>
        <NormalSearch />
      </div>
      <InventoryListTable />
      <CustomTablePagination total={120} page={page} setPage={setPage} onPageChange={handleChangePage} />
    </div>
  );
}
