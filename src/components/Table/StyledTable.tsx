import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { PageWeb } from '@/@types/page';


interface StyledTableProps {
  data: PageWeb[];
}

const StyledTable: React.FC<StyledTableProps> = ({ data }) => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>URL</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((page) => (
            <TableRow key={page.id} hover>
              <TableCell>{page.id}</TableCell>
              <TableCell>{page.url}</TableCell>
              <TableCell>{page.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StyledTable;
