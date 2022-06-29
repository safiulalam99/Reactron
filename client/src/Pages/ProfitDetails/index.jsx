import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Grids from "../../Component/Grids";

const ProfitDetails = () => {
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
  let filters = TimeData.filter((d) => d.Project.split(" ")[0] === splits);
console.log(filters);
  return <div>ProfitDe tails</div>;
};

export default ProfitDetails;
