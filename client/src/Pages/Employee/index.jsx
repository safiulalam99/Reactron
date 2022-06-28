import React, { useEffect, useState } from "react";
import EmployeeTable from "../../Component/EmployeeTable";
import axios from "axios";
import Container from "@mui/material/Container";

const Employee = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState("");
  // const fetchData = async () => {
  //   const data1 = await axios.get("http://localhost:5000/api/v1/timeSheet");
  //   setData(data1);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log(data.data);
  return (
    <>
      <EmployeeTable />
    </>
  );
};

export default Employee;
