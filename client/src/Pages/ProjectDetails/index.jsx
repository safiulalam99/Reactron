import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProjectGrid from "../../Component/ProjectGrid";

const ProfitDetails = () => {
  const location = useLocation();
  let path = location.pathname;
  let splits = path.split("%")[0].split("/")[2];
  // console.log(splits)

  const [TimeData, setTimeData] = useState([]);
  const [internal, setInternal] = useState([]);
  const [external, setExternal] = useState([]);

  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

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

  let filters = TimeData.filter((d) => d.Project.split(" ")[0] === splits);
  let hours = 0;
  const duration = filters.map((d) => (hours += d.Duration / 3600));
  const name = filters.map((d) => d.Project)[0];

  const projectExternalRate = external
    .filter((d) => d.Project === name)
    .map((d) => d.Hourly_rate)
    .toString();

  const projectRevenue = (hours * projectExternalRate).toFixed(2);

  //profit
  let internalRate = {};
  let wages = 0;

  let filteredInternal = internal.map((d) => (internalRate[d.User] = d.internal_rate));
  let tempFilter = filters.map((row) =>
    internalRate[row.User]
      ? (wages += (row.Duration / 3600) * internalRate[row.User])
      : (wages += 0)
  );

  const profit = projectRevenue - Math.round(wages)

  // employees working on project
  const user = filters.map((d) => d.User);
  const uniqueEmployees = user.filter(unique).toString();
  console.log(uniqueEmployees);

  return (
    <div>
      <ProjectGrid
        name={name}
        hours={Math.round(hours)}
        projectRevenue={projectRevenue}
        employees={uniqueEmployees}
        profit={profit}
      />
    </div>
  );
};

export default ProfitDetails;
