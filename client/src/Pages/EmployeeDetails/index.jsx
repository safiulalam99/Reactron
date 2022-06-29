import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Grids from "../../Component/EmployeeGrids";
import Charts from "../../Component/LineChart";
import Grid from '@mui/material/Grid';

const EmployeeDetail = () => {
  const location = useLocation();
  let path = location.pathname;
  let splits = path.split("%")[0].split("/")[2];
  // console.log(splits)

  const [TimeData, setTimeData] = useState([]);
  const [internal, setInternal] = useState([]);
  const [external, setExternal] = useState([]);

  const fetchData = async () => {
    const data1 = await axios.get(
      "https://run.mocky.io/v3/a3f3a8dd-678f-4941-91b2-28923b305d4b"
    );
    setTimeData(data1.data);
  };

  const fetchInternal = async () => {
    const data1 = await axios.get(
      "https://run.mocky.io/v3/77d33342-bb12-4e57-a881-d98871b959d2"
    );
    setInternal(data1.data);
  };

  const fetchExternal = async () => {
    const data1 = await axios.get(
      "https://run.mocky.io/v3/9618fa8f-fc1f-4429-bb1a-6c752af43975"
    );
    setExternal(data1.data);
  };

  useEffect(() => {
    fetchData();
    fetchInternal();
    fetchExternal();
  }, []);

  let filters = TimeData.filter((d) => d.User.split(" ")[0] === splits);
  // const user= TimeData.filter((d) => d.User);
  // console.log(filters);
  //   const unique = (value, index, self) => {
  //     return self.indexOf(value) === index;
  //   };

  //   const lipa = filters.map((d) => d.Project);
  //   const uniqueAges = lipa.filter(unique);

  //   for (let i = 0; i < uniqueAges.length; i++) {
  //     let sortedProject = filters.filter((row) => row.Project === uniqueAges[i]);
  //     // console.log(sortedProject);
  //   }

  // let filteredExternal = external.map((d)=>(JSON.stringify(d.Project, d.Hourly_rate)))

  //revenue
  let externalRate = {};
  let revenue = 0;
  let filteredExternal = external.map((d) => (externalRate[d.Project] = d.Hourly_rate));
  let tempFilter = filters.map((row) =>
    externalRate[row.Project]
      ? (revenue += (row.Duration / 3600) * externalRate[row.Project])
      : (revenue += 0)
  );

  //projects worked
  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const lipa = filters.map((d) => d.Project);
  const user = filters.map((d) => d.User);
  const uniqueAges = lipa.filter(unique);

  //hours
  let hours = 0;
  filters.map((row) => (hours += row.Duration / 3600));

  //internal rate n salary
  let variable = internal.filter((d) => d.User.split(" ")[0] === splits);
  let internalSalary = variable.map((d) => d.internal_rate).toString() * hours;

  //sickday, holiday
  let sickDay = 0;
  filters.map((row) =>
    row.Project === "Sick Leave" ? (sickDay += 1) : console.log("work")
  );

  let holiday = 0;
  filters.map((row) =>
    row.Project === "Holiday" ? (sickDay += 1) : console.log("work")
  );

  const duration = filters.map((row) => Math.round(row.Duration / 3600));
  const date = filters.map((row) => row.Date);

  //non billable
  let totalNonBillableHours = 0;
  let totalBillableHours = 0;
  const totalFilteredHours = filters.filter((d) => d.Billable === 'Yes');
  const totalHours = totalFilteredHours.map((d) => totalBillableHours += d.Duration / 3600)

  const bill = filters.filter((d) => d.Billable === 'No');
  const billable = bill.map((d) => totalNonBillableHours += d.Duration / 3600)
  let rate = variable.map((d) => d.internal_rate).toString();

  // console.log(rate);
  // console.log('bill',bill);
  return (
    <>
      <Charts date={date} duration={duration} type={'Line'} />
      <Grids
        revenue={revenue}
        hours={hours}
        projects={uniqueAges}
        salary={internalSalary}
        sickDay={sickDay}
        holiday={holiday}
        user={user[0]}
        billable={totalNonBillableHours.toFixed(1)}
        totalIndex={totalBillableHours.toFixed(1)}
        rate={rate}
      />
    </>
  );
};

export default EmployeeDetail;
