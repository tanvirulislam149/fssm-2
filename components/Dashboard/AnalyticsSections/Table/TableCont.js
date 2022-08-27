import React from 'react';
import styles from './TableCont.module.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    fontWeight: 700
  },
}));

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 'NFSSM', 6.0, 24, 4.0),
  createData(2, 'BMGF', 9.0, 37, 4.3),
  createData(3, 'NFSSM', 16.0, 24, 6.0),
  createData(4, 'BMGF', 3.7, 67, 4.3),
  createData(5, 'NFSSM', 16.0, 49, 3.9),
  createData('', 'Total', 656, 321, 23)
];

const TableCont = () => {
  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label}>Dashboard</h4>
        <TableContainer
          component={Paper}
          className={styles.paper}
          sx={{
            '& .MuiPaper-root-MuiTableContainer-root': {
              borderBottomWidth: '0px',
            },
          }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>S.No</StyledTableCell>
                <StyledTableCell align="right">Organization Name</StyledTableCell>
                <StyledTableCell align="right">No of Docs Uploaded</StyledTableCell>
                <StyledTableCell align="right">No of Docs Mapped</StyledTableCell>
                <StyledTableCell align="right">No of Docs Approved</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.calories}</StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default TableCont