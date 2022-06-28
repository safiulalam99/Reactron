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
    // console.log(splits)  
 
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
    filters.map((row) => row.User)
  )
}

export default EmployeeDetail