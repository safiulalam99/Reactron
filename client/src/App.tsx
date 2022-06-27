import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from '../src/Component/Nav'
import Revenue from '../src/Pages/Revenue'

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
      <Routes>
       
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </Router>
  );
}

export default App;
