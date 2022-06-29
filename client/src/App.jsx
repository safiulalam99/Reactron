import './App.css';
import NavBar from './Component/Nav'
import FormulaCard from './Formulas'
import Revenue from './Pages/Revenue'
import Profit from './Pages/Project'
import ProfitDetails from './Pages/ProjectDetails'
import EmployeeDetail from './Pages/EmployeeDetails'
import Container from '@mui/material/Container';

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Pages/Home';
import Employee from './Pages/Employee';

function App() {
  return (
    <Router>
      <NavBar style={{ background: '#000000' }}/>
      <Container style={{ padding: "10vh" }}>
      <Routes>
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/project" element={<Profit />} />
        <Route path="/project/:id" element={<ProfitDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
        <Route path="/formula" element={<FormulaCard />} />
      </Routes>
      </Container>
    </Router>
  );
}

export default App;
