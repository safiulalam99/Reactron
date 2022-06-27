import React, { useEffect, useState } from "react";
//@ts-ignore
import axios from "axios";

const Employee = () => {
  const [data, setData] = useState('');
  console.log(data);

  async function fetchData() {
    let response = await axios(
      `http://localhost:5000/api/v1/timeSheet`
    );
    let user = await response.data;
    setData(user);
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Employee</div>;
};

export default Employee;
