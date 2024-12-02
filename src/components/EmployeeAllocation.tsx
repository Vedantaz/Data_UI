import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Box, SelectChangeEvent, Typography } from '@mui/material';
import { rows } from './organisms/EmployeeTable';
import Select from '../components/atoms/Select'

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
                        return `Project Allocation : ${value.toFixed(2)}%`;
                    },
                },
            },
            datalabels: {
                color: 'white',
                formatter: (value: number) => `${value.toFixed(2)}%`,
                font: {
                    size: 16,
                    weight: 'bold',
                },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };
    
    return (
        <Box className='resourceBox'>
            <Select  value={selectedUser} onChange={handleUserChange} label="Select Employee" options={rows.map((row) => row.name)}/>

            {/* <FormControl className='formControl' sx={{ width: 400 }}>
                <InputLabel className='inputLabel' id="demo-simple-select-label" >Select Employee</InputLabel>
                <Select value={selectedUser} onChange={handleUserChange} className='selectInput' labelId="demo-simple-select-label"
    id="demo-simple-select" label="Select Employee">
                    
                    {rows.map((row) => (
                        <MenuItem key={row.name} value={row.name}>
                            {row.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl> */}

            <Box sx={{ marginTop: 3, width: 400, height: 400 }}>
                {userProjectData.length > 0 ? (
                    <Pie data={pieChartData} options={options}/>
                ) : (
                    <Typography variant="h6">No data available</Typography>
                )}
            </Box>

        </Box>
    );
};

export default EmployeeAllocationChart;