import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Select, MenuItem, FormControl, InputLabel, Box, SelectChangeEvent, Typography } from '@mui/material';
import { rows } from './EmployeeTable';

ChartJS.register(ArcElement, Tooltip, Legend);
interface Row {
    name: string;
    projects: string;
}

interface UserProjectData {
    project: string;
    percentage: string;
}

const EmployeeAllocationChart = ({ rows: any }: { rows: Row[] }) => {

    const [selectedUser, setSelectedUser] = useState('');
    const [userProjectData, setUserProjectData] = useState<UserProjectData[]>([]);

    useEffect(() => {
        if (rows.length > 0) {
            const defaultUser = rows[0].name;
            setSelectedUser(defaultUser);
            setProjectData(defaultUser);
        }
    }, [rows]);

    // Function to handle user selection from dropdown
    const handleUserChange = (event: SelectChangeEvent<string>) => {
        const userName = event.target.value as string;
        setSelectedUser(userName);
        setProjectData(userName);
    };

    // Function to set the project allocation data based on selected user
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

    // Pie Chart Data
    const pieChartData = {
        labels: userProjectData.map((item) => item.project),
        datasets: [
            {
                data: userProjectData.map((item) => parseFloat(item.percentage)),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'], // Customize colors as needed
                borderColor: '#fff',
                borderWidth: 1,
            },
        ],
    };

    return (
        <Box className='resourceBox'>
            <FormControl className='formControl' sx={{ width: 400 }}>
                <InputLabel className='inputLabel' sx={{position:'absolute', marginBottom:20, transition: 'all 0.2s ease',}} >Select Employee</InputLabel>
                <Select value={selectedUser} onChange={handleUserChange} className='selectInput' displayEmpty>
                    <MenuItem value="" disabled>
                        Select Employee
                    </MenuItem>
                    {/* Map through the rows and create MenuItems for each employee */}
                    {rows.map((row) => (
                        <MenuItem key={row.name} value={row.name}>
                            {row.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {/* Render Pie chart */}
            <Box sx={{ marginTop: 3, width: 400, height: 400 }}>
                {userProjectData.length > 0 ? (
                    <Pie data={pieChartData} />
                ) : (
                    <Typography variant="h6">No data available</Typography>
                )}
            </Box>
        </Box>
    );
};

export default EmployeeAllocationChart;