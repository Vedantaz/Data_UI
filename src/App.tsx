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
    
    // <Box sx={{ display: 'flex', height: '100vh' }}>
    //   <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
    //     <Navbar />
    //     <EmployeeTable /> 
    //     <Footer />
    //   </Box>
    // </Box>
  );
};

export default App;


// employee table code in this too 

// <Container maxWidth="xl" sx={{ flexGrow: 1, paddingTop: 3 }}>
//           <Grid container spacing={3}>
//             {/* Emp Summary Column */}
//             <Grid item xs={12} md={4}>
//               <Paper sx={{ padding: 2, height: '100%' }}>
//                 <Typography variant="h6" gutterBottom>
//                   Employee Summary
//                 </Typography>
//                 {/* Emp Summary Content */}
//                 <Typography>Name: John Doe</Typography>
//                 <Typography>Role: Software Engineer</Typography>
//                 <Typography>Last Update: 2024-11-26</Typography>
//                 <Typography>Project: Project X</Typography>
//               </Paper>
//             </Grid>

//             {/* Project Details Column */}
//             <Grid item xs={12} md={4}>
//               <Paper sx={{ padding: 2, height: '100%' }}>
//                 <Typography variant="h6" gutterBottom>
//                   Project Details
//                 </Typography>
//                 {/* Project Details Content */}
//                 <Typography>Name: Project X</Typography>
//                 <Typography>Progress: 70%</Typography>
//                 <Typography>Total Hours: 120</Typography>
//                 <Typography>Tasks:</Typography>
//                 <Box>
//                   <input placeholder="Task 1" style={{ width: '100%', marginBottom: '8px' }} />
//                   <input placeholder="Task 2" style={{ width: '100%' }} />
//                 </Box>
//               </Paper>
//             </Grid>

//             {/* Contribution Column */}
//             <Grid item xs={12} md={4}>
//               <Paper sx={{ padding: 2, height: '100%' }}>
//                 <Typography variant="h6" gutterBottom>
//                   Contribution
//                 </Typography>
//                 {/* Contribution Content */}
//                 <Typography>Project: Project X</Typography>
//                 <Typography>Progress: 70%</Typography>
//                 <Typography>Completed Hours: 60</Typography>
//                 <Typography>Ongoing Hours: 60</Typography>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Container>