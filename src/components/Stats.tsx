import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, CategoryScale, ChartOptions } from 'chart.js';
import { rows } from "./EmployeeTable";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './CSS files/Stats.css';
ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, ChartDataLabels);

const Stats: React.FC = () => {

    const [view, setView] = useState<'project' | 'resource'>('project');
    const projectCounts: Record<string, number> = {};
    let assignedProjects;

    rows.forEach((row: any) => {
        assignedProjects = row.projects.split(',').map((project: any) => project.trim());
        assignedProjects.forEach((project: any) => {
            projectCounts[project] = (projectCounts[project] || 0) + 1;
        });
    });
    const labels = Object.keys(projectCounts);

    const data = {
        labels,
        datasets: [
            {
                label: 'Project Distribution',
                data: labels.map((project) => {
                    const totalEmployees = rows.length;

                    let totalProjectPercentage = 0;
                    rows.forEach((row: any) => {
                        const assignedProjects = row.projects.split(',').map((project: string) => project.trim());
                        if (assignedProjects.includes(project)) {
                            totalProjectPercentage += (1 / totalEmployees) * 100 / assignedProjects.length;
                        }
                    });
                    return totalProjectPercentage;

                }),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF5722'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF5722'],
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
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                {view === 'project' ? 'Project Allocation' : 'Resource Allocation'}
            </Typography>

            <Box sx={{ marginBottom: 4 }}>
                <Button
                    variant="contained"
                    color={view === 'project' ? 'primary' : 'secondary'}
                    onClick={() => setView('project')}
                    sx={{ marginRight: 2 }}
                >
                    Project Allocation
                </Button>
                <Button
                    variant="contained"
                    color={view === 'resource' ? 'primary' : 'secondary'}
                    onClick={() => setView('resource')}
                >
                    Resource Allocation
                </Button>
            </Box>

            {view === 'project' && (
                <Box sx={{ width: 400, height: 400, margin: '0 auto', }}>
                    <Pie data={data} options={options} />
                </Box>
            )}

            {view === 'resource' && (
                <Box className='resourceBox'>
                    <TableContainer sx={{ width: 'fit-content' }}>
                        <Table>
                            <TableHead >
                                <TableRow className="header-row" >
                                    <TableCell className="table-header" >Name</TableCell>
                                    <TableCell className="table-header" >Projects</TableCell>
                                    <TableCell className="table-header" >Allocation (%)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => {
                                    const assignedProjects = row.projects.split(',').map((project: string) => project.trim());
                                    const projectPercentages: Record<string, number> = {};
                                    assignedProjects.forEach((project) => {
                                        if (!projectPercentages[project]) {
                                            projectPercentages[project] = 0;
                                        }
                                        const employeePercentage = 100 / assignedProjects.length;
                                        projectPercentages[project] += employeePercentage;
                                    });
                                    const formattedProjectPercentages = Object.keys(projectPercentages).map((project) => {
                                        return {
                                            project,
                                            percentage: projectPercentages[project].toFixed(2)
                                        };
                                    });
                                    return (
                                        <TableRow className='data-rows' key={row.name}>
                                            <TableCell className='data-cell'>{row.name}</TableCell>
                                            <TableCell className='data-cell'>{assignedProjects.join(', ')}</TableCell>
                                            <TableCell >
                                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start' }}>
                                                    {formattedProjectPercentages.map((item, index) => (
                                                        <Typography key={index} sx={{ marginRight: 2 }}>
                                                            {item.project}: {item.percentage}%
                                                        </Typography>
                                                    ))}
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </Box>
    );
};

export default Stats;