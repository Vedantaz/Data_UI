import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import EmployeeAllocationChart from '../../organisms/employeeAllocationChart';

const EmployeeAllocationTemplate: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Employee Allocation Dashboard
        </Typography>
        <Typography variant="body1">
          Visualize how projects are distributed among employees.
        </Typography>
      </Box>
      <Box>
        <EmployeeAllocationChart />
      </Box>
    </Container>
  );
};

export default EmployeeAllocationTemplate;
