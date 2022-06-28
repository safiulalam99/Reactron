import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Component/Nav'
import Revenue from './Pages/Revenue'
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
      <NavBar />
      <Container style={{ padding: "8vh" }}>
      <Routes>
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
      </Routes>
      </Container>
    </Router>
  );
}

export default App;
