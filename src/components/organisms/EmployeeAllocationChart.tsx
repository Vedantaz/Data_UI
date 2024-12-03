import { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Box, SelectChangeEvent } from '@mui/material';
import { rows } from '../../data/rows';
import PieChart from '../molecules/PieChart';
import Select from '../atoms/Select';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Row {
  name: string;
  projects: string;
}

interface UserProjectData {
  project: string;
  percentage: string;
}

const EmployeeAllocationChart = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [userProjectData, setUserProjectData] = useState<UserProjectData[]>([]);

  useEffect(() => {
    if (rows.length > 0) {
      const defaultUser = rows[0].name;
      setSelectedUser(defaultUser);
      setProjectData(defaultUser);
    }
  }, []);

  const handleUserChange = (event: SelectChangeEvent<string>) => {
    const userName = event.target.value as string;
    setSelectedUser(userName);
    setProjectData(userName);
  };

  const setProjectData = (userName: string) => {
    const user = rows.find((row) => row.name === userName);
    if (user) {
      const assignedProjects = user.projects.split(',').map((project) => project.trim());
      const projectPercentages: Record<string, number> = {};

      assignedProjects.forEach((project) => {
        if (!projectPercentages[project]) {
          projectPercentages[project] = 0;
        }
        const employeePercentage = 100 / assignedProjects.length;
        projectPercentages[project] += employeePercentage;
      });

      const formattedProjectPercentages: UserProjectData[] = Object.keys(projectPercentages).map((project) => ({
        project,
        percentage: projectPercentages[project].toFixed(2),
      }));

      setUserProjectData(formattedProjectPercentages);
    }
  };

  const pieChartData = {
    labels: userProjectData.map((item) => item.project),
    datasets: [
      {
        data: userProjectData.map((item) => parseFloat(item.percentage)),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'pie'> = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataset = tooltipItem.dataset;
            const value = dataset.data[tooltipItem.dataIndex] as number;
            return `Project Allocation: ${value.toFixed(2)}%`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Box>
       <Select  value={selectedUser} onChange={handleUserChange} label="Select Employee" options={rows.map((row:any) => row.name)}/>

      <PieChart data={pieChartData} options={options} userProjectDataLength={userProjectData.length} />
    </Box>
  );
};

export default EmployeeAllocationChart;
