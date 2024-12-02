import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { Home, Settings, Person } from '@mui/icons-material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stats from './components/Stats';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import EmployeeTable from './components/EmployeeTable';
import EmployeeAllocationChart from './components/EmployeeAllocation';

import {rows} from './components/EmployeeTable';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Footer/>
      <Routes>
        <Route path="/Stats" element={<Stats />} />
        <Route path="/" element={<EmployeeTable />} /> 
        <Route path="/employee-allocation" element={<EmployeeAllocationChart rows={rows} />} /> 
      </Routes>
    </Router>
  );
};

export default App;

