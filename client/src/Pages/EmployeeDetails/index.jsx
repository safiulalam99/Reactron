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
import {  useLocation } from 'react-router-dom';


const EmployeeDetail = () => {
    const location = useLocation();
    let path = location.pathname
   let splits = path.split('%')[0].split('/')[2]
    console.log(splits)  
 
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const fetchData = async () => {
      const data1 = await axios.get(
        "http://localhost:5000/api/v1/timeSheet "
      );
      setData(data1.data);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  let filters= data.filter(d=>d.User.split(' ')[0] === splits);
  console.log('object ', filters);


    
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
          {filters.map((row) => (
           
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
  )
}

export default EmployeeDetail