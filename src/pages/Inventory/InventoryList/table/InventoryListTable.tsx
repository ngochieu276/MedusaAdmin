import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ItemImg from './../../../../style/img/inventory/item.png';

interface InventoryList {
  name: string;
  variants: string[];
  sku: string;
  incomming: number;
  committed: number;
  available: number;
}

interface InventoryListHeader {
  name: string;
  variants: string;
  sku: string;
  incomming: string;
  committed: string;
  available: string;
}

function createData(
  name: string,
  variants: string[],
  sku: string,
  incomming: number,
  committed: number,
  available: number
) {
  return { name, variants, sku, incomming, committed, available };
}

const tableData: InventoryList[] = [
  createData('Frozen yoghurt', ['small', 'white', 'hooded'], 'ROBE_001', 24, 4.0, 240),
  createData('Ice cream sandwich', ['small', 'white', 'hooded'], 'ROBE_001', 37, 4.3, 240),
  createData('Eclair', ['small', 'white', 'hooded'], 'ROBE_001', 24, 6.0, 240),
  createData('Cupcake', ['small', 'white', 'hooded'], 'ROBE_001', 67, 4.3, 240),
  createData('Gingerbread', ['small', 'white', 'hooded'], 'ROBE_001', 49, 3.9, 240),
  createData('Frozen yoghurt', ['small', 'white', 'hooded'], 'ROBE_001', 24, 4.0, 240),
  createData('Ice cream sandwich', ['small', 'white', 'hooded'], 'ROBE_001', 37, 4.3, 240),
  createData('Eclair', ['small', 'white', 'hooded'], 'ROBE_001', 24, 6.0, 240),
  createData('Cupcake', ['small', 'white', 'hooded'], 'ROBE_001', 67, 4.3, 240),
  createData('Gingerbread', ['small', 'white', 'hooded'], 'ROBE_001', 49, 3.9, 240),
];

const tableHeader1: InventoryListHeader = {
  name: 'Item',
  variants: 'Variants',
  sku: 'SKU',
  incomming: 'Incoming',
  committed: 'Committed',
  available: 'Availabel',
};

export default function InventoryListTable() {
  const renderVariants = (variants: string[]) => {
    return <p>{variants.join(`, `)}</p>;
  };

  return (
    <div className="inventory-list-table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Object.values(tableHeader1).map((value, index) => {
                return <TableCell align={index !== 0 ? 'right' : undefined}>{value}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row: InventoryList) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <div className="item-name-with-image">
                    <img src={ItemImg} />
                    {row.name}
                  </div>
                </TableCell>
                <TableCell align="right">{renderVariants(row.variants)}</TableCell>
                <TableCell align="right">{row.sku}</TableCell>
                <TableCell align="right">{row.incomming}</TableCell>
                <TableCell align="right">{row.committed}</TableCell>
                <TableCell align="right">{row.available}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
