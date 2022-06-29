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

export default function EmployeeTable({data}) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Internal rate</TableCell>
            <TableCell align="right">Customer</TableCell>
            <TableCell align="right">Project</TableCell>
            <TableCell align="right">Billable</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
           
              <TableRow
                key={row.User}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                 <Link
              to={`/employee/${row.User}`}
            >
                <TableCell component="th" scope="row">
                  {row.User}
                </TableCell>
                </Link>
                <TableCell align="right">{row.Duration}</TableCell>
                <TableCell align="right">{row.Date}</TableCell>
                <TableCell align="right">{row.Internal_rate}</TableCell>
                <TableCell align="right">{row.Customer}</TableCell>
                <TableCell align="right">{row.Project}</TableCell>
                <TableCell align="right">{row.Billable}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
