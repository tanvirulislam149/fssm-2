import React, { useEffect, useState } from 'react';
import styles from './TableCont.module.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import { getStats } from '../../../../services/dashboardService';
import { CircularProgress } from '@mui/material';

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
    backgroundColor: '#EAEAEA',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    fontWeight: 700,
  },
}));



const TableCont = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState({
    approved: 0,
    uploaded: 0,
    unmapped: 0
  })

  function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const handleStats = (data) => {
    let uploaded = 0, approved = 0, unmapped = 0;
    const cats = Object.keys(data).map((key) => key);

    let count = 0;
    const init = [
      cats.map(org => {
        count++;
        uploaded += data[org].uploaded;
        approved += data[org].approved;
        unmapped += data[org].unmapped;
        return createData(count, org, data[org].uploaded, data[org].unmapped, data[org].approved)
      })
    ]

    setTotal({
      uploaded: uploaded,
      unmapped: unmapped,
      approved: approved
    })

    setRows(...init);
    setLoading(false);
  }

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
    //setError(err.response.statusText);
  }

  useEffect(() => {
    getStats((err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        console.log({ r: res })
        handleStats(res.data['Stacked Graph'])
      }
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label}><p>Dashboard</p> <Link href='https://swachhfssm.in/pullknowledgemanagementdata'><a><span className={styles.gmail}>GMail API</span></a></Link></h4>
        {loading ? <div className={styles.justify_center}><CircularProgress /></div> :
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
                  <StyledTableCell className={styles.cell} align="center">S.NO</StyledTableCell>
                  <StyledTableCell className={styles.cell} align="center">Organization Name</StyledTableCell>
                  <StyledTableCell className={styles.cell} align="center">No of Docs Uploaded</StyledTableCell>
                  <StyledTableCell className={styles.cell} align="center">No of Docs Mapped</StyledTableCell>
                  <StyledTableCell align="center">No of Docs Approved</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell className={styles.cell} align="center" component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell className={styles.cell} align="center">{row.calories}</StyledTableCell>
                    <StyledTableCell className={styles.cell} align="center">{row.fat}</StyledTableCell>
                    <StyledTableCell className={styles.cell} align="center">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="center">{row.protein}</StyledTableCell>
                  </StyledTableRow>
                )
                )}
                <StyledTableRow>
                  <StyledTableCell className={styles.cell} align="center" component="th" scope="row">
                    {''}
                  </StyledTableCell>
                  <StyledTableCell className={styles.cell} align="center">Total</StyledTableCell>
                  <StyledTableCell className={styles.cell} align="center">{total.uploaded}</StyledTableCell>
                  <StyledTableCell className={styles.cell} align="center">{total.unmapped}</StyledTableCell>
                  <StyledTableCell align="center">{total.approved}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        }
      </div>
    </>
  )
}

export default TableCont