import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {StyledTableCell,StyledTableRow} from '../../Component/MuiTableStyles'


export default function EmployeeTable({ data }) {
  const [searchTerm, setSearchTerm] = useState();
  console.log(searchTerm);
  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Duration (hrs)</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Internal rate</StyledTableCell>
              <StyledTableCell align="right">Customer</StyledTableCell>
              <StyledTableCell align="right">Project</StyledTableCell>
              <StyledTableCell align="right">Billable</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
                <StyledTableRow
                  key={row.User}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <Link to={`/employee/${row.User}`}>
                    <StyledTableCell component="th" scope="row">
                      {row.User}
                    </StyledTableCell>
                  </Link>
                  <StyledTableCell align="right">{(row.Duration/3600).toFixed(1)}</StyledTableCell>
                  <StyledTableCell align="right">{row.Date}</StyledTableCell>
                  <StyledTableCell align="right">{row.Internal_rate}</StyledTableCell>
                  <StyledTableCell align="right">{row.Customer}</StyledTableCell>
                  <StyledTableCell align="right">{row.Project}</StyledTableCell>
                  <StyledTableCell align="right">{row.Billable}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
