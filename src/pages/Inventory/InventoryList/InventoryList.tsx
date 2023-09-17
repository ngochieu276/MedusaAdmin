import { useState } from 'react';

import { Factory } from '../../../style/svg/inventory';
import InventoryListTable from './table/InventoryListTable';
import NormalSearch from '../../../components/search/NormalSearch';
import IconDropdown from '../../../components/dropdown/IconDropdown';
import CustomTablePagination from '../../../components/pagination/TablePagination';
import { appEventEmitter } from '../../../initilization';
import { ModalNode, ModalType } from '../../../components/modal/ModalComponent';
import { APP_EVENTS } from '../../../dto';
import { InventoryModal } from './InventoryModal';

export default function InventoryList() {
  const [page, setPage] = useState(2);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const openModal = () => {
    appEventEmitter.emit<ModalNode>(APP_EVENTS.app_modal, {
      input: {},
      type: ModalType.center,
      status: true,
      node: InventoryModal,
      title: 'Modal',
      onClose: () => {},
      onDone: () => {},
    });
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
      <button onClick={openModal}>Modal</button>
    </div>
  );
}
