import React, { useEffect, useState } from "react";
import EmployeeTable from "../../Component/EmployeeTable";
import axios from "axios";
import Container from "@mui/material/Container";

const Employee = () => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState("");
  // const fetchData = async () => {
  //   const data1 = await axios.get("https://run.mocky.io/v3/a3f3a8dd-678f-4941-91b2-28923b305d4b");
  //   setData(data1.data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log(data);
  return (
    <>
      <EmployeeTable />
    </>
  );
};

export default Employee;
