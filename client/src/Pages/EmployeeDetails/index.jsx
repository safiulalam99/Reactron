import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Grids from "../../Component/Grids";

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
  let obj = {};
  let revenue = 0;
  let filteredExternal = external.map((d) => (obj[d.Project] = d.Hourly_rate));
  let tempFilter = filters.map((row) =>
    obj[row.Project]
      ? (revenue += (row.Duration / 3600) * obj[row.Project])
      : (revenue += 0)
  );

  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const lipa = filters.map((d) => d.Project);
  const user = filters.map((d) => d.User);
  const uniqueAges = lipa.filter(unique);

  let hours = 0;
  filters.map((row) => (hours += row.Duration / 3600));
  let variable = internal.filter((d) => d.User.split(" ")[0] === splits);
  let internalSalary = variable.map((d) => d.internal_rate).toString() * hours;

  let sickDay = 0;
  filters.map((row) =>
    row.Project === "Sick Leave" ? (sickDay += 1) : console.log("work")
  );

  let holiday = 0;
  filters.map((row) =>
    row.Project === "Holiday" ? (sickDay += 1) : console.log("work")
  );

  return (
    <Grids
      revenue={revenue}
      hours={hours}
      projects={uniqueAges}
      salary={internalSalary}
      sickDay={sickDay}
      holiday={holiday}
      user={user[0]}
    />
  );
};

export default EmployeeDetail;
