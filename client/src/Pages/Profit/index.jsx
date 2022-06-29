import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectTable from '../../Component/ProjectTable'

const Project = () => {
  const [external, setExternal] = useState([]);
  const fetchExternal = async () => {
    const data1 = await axios.get(
      "https://run.mocky.io/v3/4e64f315-adb4-49df-a439-61a14da36084"
    );
    setExternal(data1.data);
  };

  useEffect(() => {
    fetchExternal();
  }, []);

  return <div>
    <h1>Projects</h1>
      <ProjectTable data={external}/>
  </div>;
};

export default Project;
