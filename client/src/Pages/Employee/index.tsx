import React, { useEffect, useState } from "react";
//@ts-ignore
import axios from "axios";

const Employee = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  console.log(data);
  const fetchData = async () => {
    const  data1   = await axios.get('http://localhost:5000/api/v1/timeSheet') as any;
    setData(data1);
  };

  useEffect(() => {
    fetchData();
  }, []);

console.log(data);
  return <div>Employee</div>;
};

export default Employee;
