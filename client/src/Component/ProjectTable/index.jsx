import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { StyledTableCell, StyledTableRow } from '../../Component/MuiTableStyles'

export default function ProjectTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Project</StyledTableCell>
            <StyledTableCell align="right">Customer</StyledTableCell>
            <StyledTableCell align="right">Activity</StyledTableCell>
            <StyledTableCell align="right">Hourly Rate</StyledTableCell>
            <StyledTableCell align="right">Monthly Rate</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow
              key={row.Hourly_rate}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                <Link to={`/project/${row.Project}`}>
                  {row.Project}
                </Link>
              </StyledTableCell>
              <StyledTableCell align="right">{row.Customer}</StyledTableCell>
              <StyledTableCell align="right">{row.Activity}</StyledTableCell>
              <StyledTableCell align="right">{row.Hourly_rate}</StyledTableCell>
              <StyledTableCell align="right">{row.Monthly_rate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
