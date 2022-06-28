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
import { useLocation } from "react-router-dom";

const EmployeeDetail = () => {
  const location = useLocation();
  let path = location.pathname;
  let splits = path.split("%")[0].split("/")[2];
  // console.log(splits)

  const [TimeData, setTimeData] = useState([]);
  const [internal, setInternal] = useState([]);
  const [external, setExternal] = useState([]);
  const [error, setError] = useState("");
  const fetchData = async () => {
    const data1 = await axios.get(
      "https://run.mocky.io/v3/a3f3a8dd-678f-4941-91b2-28923b305d4b"
    );
    setTimeData(data1.data);
  };
  const fetchInternal = async () => {
    const data1 = await axios.get(
      "https://run.mocky.io/v3/7c84ba10-822f-4b30-9b0d-156a8c7dad33"
    );
    setInternal(data1.data);
  };
  const fetchExternal = async () => {
    const data1 = await axios.get(
      "https://run.mocky.io/v3/4e64f315-adb4-49df-a439-61a14da36084"
    );
    setExternal(data1.data);
  };

  useEffect(() => {
    fetchData();
    fetchInternal();
    fetchExternal();
  }, []);
  let filters = TimeData.filter((d) => d.User.split(" ")[0] === splits);
  // console.log(filters);
  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const lipa = filters.map((d) => d.Project);
  const uniqueAges = lipa.filter(unique);

  for (let i = 0; i < uniqueAges.length; i++) {
    let sortedProject = filters.filter((row) => row.Project === uniqueAges[i]);
    console.log(sortedProject);
  }

  console.log(uniqueAges);

  let hours = 0;
  const option = "FeetB";
  {
    option
      ? filters.map((row) => (hours += row.Duration / 3600))
      : console.log("hours");
  }
  return hours;
};

export default EmployeeDetail;
