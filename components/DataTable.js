import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import CreateIcon from '@mui/icons-material/Create';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import ModalCreate from './ModalCreate';
import ModalDelete from './ModalDelete';
import ModalEdit from './ModalEdit';
const columns = [
  { id: 'name', label: 'Nombre', minWidth: 50  , align: 'right'},
  { id: 'code', label: 'Postal', minWidth: 50 , align: 'right'},
  {
    id: 'population',
    label: 'Poblacion',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Tamaño\u00a0(km\u00b2)',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Densidad',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toFixed(2),
  },,
  {
    id: 'buttons',
    label: '',
    minWidth: 50,
    align: 'right',
   
  },
];
function deleteItem (id){
    console.log(id)
}
function createData(id,name, code, population, size,buttons) {
  const density = population / size;
  
  return {id, name, code, population, size, density,buttons};
}
function btn (id) {return <><ButtonGroup   variant="contained">
    <ModalCreate></ModalCreate>
   <ModalEdit></ModalEdit>
   <ModalDelete></ModalDelete></ButtonGroup >
</>
}

const rows = [
  createData(0,'India', 'IN', 1324171354, 3287263,btn(0)),
  createData(1,'India', 'IN', 1324171354, 3287263,btn(1)),
  createData(2,'India', 'IN', 1324171354, 3287263,btn(2)),
  createData(3,'India', 'IN', 1324171354, 3287263,btn(3)),
  createData(4,'India', 'IN', 1324171354, 3287263,btn(4)),  
  createData(0,'India', 'IN', 1324171354, 3287263,btn(0)),
  createData(1,'India', 'IN', 1324171354, 3287263,btn(1)),
  createData(2,'India', 'IN', 1324171354, 3287263,btn(2)),
  createData(3,'India', 'IN', 1324171354, 3287263,btn(3)),
  createData(4,'India', 'IN', 1324171354, 3287263,btn(4)),  
  createData(0,'India', 'IN', 1324171354, 3287263,btn(0)),
  createData(1,'India', 'IN', 1324171354, 3287263,btn(1)),
  createData(2,'India', 'IN', 1324171354, 3287263,btn(2)),
  createData(3,'India', 'IN', 1324171354, 3287263,btn(3)),
  createData(4,'India', 'IN', 1324171354, 3287263,btn(4)),  
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <Paper sx={{ width: '100%', overflow: 'auto' }} className="tableData">
      <TableContainer sx={{ maxHeight: 300   }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className="mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4">
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
