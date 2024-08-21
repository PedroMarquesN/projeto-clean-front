import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import { PageWeb } from '@/@types/page';


interface TableRowCustomProps {
  page: PageWeb;
}

const TableRowCustom: React.FC<TableRowCustomProps> = ({ page }) => {
  return (
    <TableRow hover>
      <TableCell>{page.id}</TableCell>
      <TableCell>{page.url}</TableCell>
      <TableCell>{page.description}</TableCell>
    </TableRow>
  );
};

export default TableRowCustom;
