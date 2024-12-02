import * as React from 'react';
import {
  Box, Table, TableBody, TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  LinearProgress,
  IconButton,
  Collapse,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import '../CSS files/EmployeeTable.css';
import { CollapsibleRow } from '../molecules/CollapsibleRow';

export const useStyles = () => ({
  tableHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '10px',
    textAlign: 'center',
    color: 'white',
  }
});
function createData(
  name: string,
  role: string,
  update: string,
  projects: string,
  team: string
) {
  return { name, role, projects, update, team };
}

export const rows = [
  {
    userId: 1,
    name: "Virat",
    role: "Developer",
    update: "Dot net",
    projects: "B, E",
    team: "Team A",
  },
  {
    userId: 2,
    name: "Rohit",
    role: "Designer",
    update: "Figma UI",
    projects: "A, E, D, C",
    team: "Team B",
  },
  {
    userId: 3,
    name: "Vedant",
    role: "React Develoepr",
    update: "Commited on React UI",
    projects: "A, D",
    team: "Team C",
  },
  {
    userId: 4,
    name: "Neha",
    role: "Angular Develoepr",
    update: "Components",
    projects: "A, B",
    team: "Team E",
  },
  {
    userId: 5,
    name: "Hina",
    role: "Vue Develoepr",
    update: "Commited on Angular UI",
    projects: "B, C, D",
    team: "Team A",
  },
  {
    userId: 6,
    name: "Diksha",
    role: "Vue Develoepr",
    update: "Commited on Angular UI",
    projects: "B, C",
    team: "Team N",
  },
  {
    userId: 7,
    name: "Jay",
    role: "Vue Develoepr",
    update: "Commited on Angular UI",
    projects: "A",
    team: "Team U",
  },
  {
    userId: 8,
    name: "Aman",
    role: "Vue Develoepr",
    update: "Commited on Angular UI",
    projects: " D, A",
    team: "Team K",
  },
  {
    userId: 9,
    name: "Tejas",
    role: "Vue Develoepr",
    update: "Commited on Angular UI",
    projects: "B, C, A",
    team: "Team J",
  },
  {
    userId: 10,
    name: "Ritesh",
    role: "Vue Develoepr",
    update: "Commited on Angular UI",
    projects: "A, C",
    team: "Team Z",
  },
];

export const projectRows = [
  {
    userId: 1,
    pName: 'A',
    progress: 75,
    tasksCommitted: ['Task 1', 'Task 2', 'Task 3'],
    tasksOngoing: ['Task 4', 'Task 5', 'Task 6'],
  },
  {
    userId: 2,
    pName: 'B',
    progress: 50,
    tasksCommitted: ['Task 1', 'Task 2', 'Task 3'],
    tasksOngoing: ['Task 4', 'Task 5 ', 'Task 6'],
  },
  {
    userId: 3,
    pName: 'C',
    progress: 90,
    tasksCommitted: ['Task 1', 'Task 2 ', 'Task 3'],
    tasksOngoing: ['Task 4', 'Task 5', 'Task 6'],
  },
  {
    userId: 4,
    pName: 'D',
    progress: 90,
    tasksCommitted: ['Task 1', 'Task 2 ', 'Task 3'],
    tasksOngoing: ['Task 4', 'Task 5', 'Task 6'],
  },
  {
    userId: 5,
    pName: 'E',
    progress: 90,
    tasksCommitted: ['Task 1', 'Task 2 ', 'Task 3'],
    tasksOngoing: ['Task 4', 'Task 5', 'Task 6'],
  },
  // {
  //   userId: 6,
  //   pName: 'F',
  //   progress: 90,
  //   tasksCommitted: ['Task 1', 'Task 2 ', 'Task 3'],
  //   tasksOngoing: ['Task 4', 'Task 5', 'Task 6'],
  // },
  // {
  //   userId: 7,
  //   pName: 'G',
  //   progress: 90,
  //   tasksCommitted: ['Task 1', 'Task 2 ', 'Task 3'],
  //   tasksOngoing: ['Task 4', 'Task 5', 'Task 6'],
  // },
  // {
  //   userId: 8,
  //   pName: 'H',
  //   progress: 90,
  //   tasksCommitted: ['Task 1', 'Task 2 ', 'Task 3'],
  //   tasksOngoing: ['Task 4', 'Task 5', 'Task 6'],
  // },
  // {
  //   userId: 9,
  //   pName: 'I',
  //   progress: 90,
  //   tasksCommitted: ['Task 1', 'Task 2 ', 'Task 3'],
  //   tasksOngoing: ['Task 4', 'Task 5', 'Task 6'],
  // },
  // {
  //   userId: 10,
  //   pName: 'J',
  //   progress: 90,
  //   tasksCommitted: ['Task 1', 'Task 2 ', 'Task 3'],
  //   tasksOngoing: ['Task 4', 'Task 5', 'Task 6'],
  // },
];

const hoursData = [
  {
    projectId: 1,
    currentProject: 'A',
    progress: '5/9 hours',
    hoursOnProject: '5 hours',
    committedHours: '4',
    ongoingHours: '1/9',
    totalProgressPercentage: 56,
  },
  {
    projectId: 2,
    currentProject: 'B',
    progress: '7/9 hours',
    hoursOnProject: '7 hours',
    committedHours: '6',
    ongoingHours: '1/9',
    totalProgressPercentage: 78,
  },
  {
    projectId: 3,
    currentProject: 'C',
    progress: '3/9 hours',
    hoursOnProject: '3 hours',
    committedHours: '2',
    ongoingHours: '1/9',
    totalProgressPercentage: 33,
  },
  {
    projectId: 4,
    currentProject: 'D',
    progress: '3/9 hours',
    hoursOnProject: '3 hours',
    committedHours: '2',
    ongoingHours: '1/9',
    totalProgressPercentage: 33,
  },
  {
    projectId: 5,
    currentProject: 'E',
    progress: '3/9 hours',
    hoursOnProject: '3 hours',
    committedHours: '2',
    ongoingHours: '1/9',
    totalProgressPercentage: 33,
  },
];

// function CollapsibleRow({ row, projects, hours }: { row: any, projects: any, hours: any }) {
//   const [open, setOpen] = React.useState(false);
//   const assignedProjects = row.projects.split(',');

//   return (
//     <>
//       <TableRow sx={{ textAlign: 'center', backgroundColor: 'white' }}>
//         <TableCell >
//           <IconButton size="small" onClick={() => setOpen(!open)}>
//             {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
//           </IconButton>
//         </TableCell>
//         <TableCell sx={{ padding: 0, height: 10, textAlign: 'center' }}>{row.name}</TableCell>
//         <TableCell sx={{ padding: 0, height: 10, textAlign: 'center' }}>{row.update}</TableCell>
//         <TableCell sx={{ padding: 0, height: 10, textAlign: 'center' }}>{row.role}</TableCell>
//         <TableCell sx={{ padding: 0, height: 10, textAlign: 'center' }}>{row.projects}</TableCell>
//         <TableCell sx={{ padding: 0, height: 10, textAlign: 'center' }}>{row.team}</TableCell>
//       </TableRow>
//       <TableRow>

//         <TableCell colSpan={6} sx={{ paddingBottom: 0, paddingTop: 0, backgroundColor: '#93C5FD' }}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 2, width: '100%' }}>
//               <Table size="small" sx={{ width: '100%' }}>
//                 <TableHead>
//                   <TableRow sx={{ borderBottom: '3px solid white' }}>
//                     <TableCell sx={{ borderRight: '3px solid white' }}>Project Name</TableCell>
//                     <TableCell sx={{ borderRight: '3px solid white' }} >Progress / Project</TableCell>
//                     <TableCell sx={{ borderRight: '3px solid white' }} >Tasks Committed</TableCell>
//                     <TableCell sx={{ borderRight: '3px solid white' }} >Tasks Ongoing</TableCell>
//                     <TableCell sx={{ borderRight: '3px solid white' }} >Progress / Day</TableCell>
//                     <TableCell >Progress (%)</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>

//                   {assignedProjects.map((projectName: any, index: number) => {
//                     return (
//                       <TableRow key={`${row.userId}-${projectName}`}>
//                         <TableCell sx={{ borderRight: '3px solid white' }} >
//                           <Typography sx={{ fontSize: 16, color: 'black' }}>
//                             {projectName}
//                           </Typography>
//                         </TableCell>
//                         <TableCell sx={{ borderRight: '3px solid white' }}>
//                           <Box display="flex" alignItems="center" justifyContent='center' gap={1}>
//                             <Typography sx={{ fontWeight: 'bold', color: 'black' }}>
//                               {projects.progress}%
//                             </Typography>
//                             <LinearProgress
//                               variant="determinate"
//                               value={projects.progress}
//                               sx={{
//                                 width: '100%', height: 8, borderRadius: 1, marginTop: 1, backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
//                                 '& .MuiLinearProgress-bar': {
//                                   backgroundColor: 'blue',
//                                 },
//                               }}
//                             />
//                           </Box>
//                           <Typography sx={{ fontSize: 16 }}>
//                             Committed Hours: {hours.committedHours}
//                           </Typography>
//                         </TableCell>
//                         <TableCell sx={{ borderRight: '3px solid white', textAlign: 'center' }}>
//                           {projects.tasksCommitted.map((task: string, index: number) => (
//                             <Typography key={index}>
//                               {task}<Box
//                                 sx={{
//                                   marginLeft: 1,
//                                   marginBottom: 1,
//                                   display: 'inline-block',
//                                   padding: '3px 6px',
//                                   backgroundColor: 'black',
//                                   borderRadius: '12px',
//                                   color: 'white',
//                                   fontWeight: 'bold',
//                                   fontSize: 12,
//                                   textAlign: 'center',
//                                 }}
//                               >
//                                 (1 Hr)
//                               </Box>

//                             </Typography>

//                           ))}
//                         </TableCell>
//                         <TableCell sx={{ borderRight: '3px solid white', textAlign: 'center' }}>
//                           {projects.tasksOngoing.map((task: string, index: number) => (
//                             <Typography key={index}>{task} <Box
//                               sx={{
//                                 marginBottom: 1,
//                                 display: 'inline-block',
//                                 padding: '3px 6px',
//                                 backgroundColor: 'black',
//                                 borderRadius: '12px',
//                                 color: 'white',
//                                 fontWeight: 'bold',
//                                 fontSize: 12,
//                                 textAlign: 'center',
//                               }}
//                             >
//                               (1 Hr)
//                             </Box>  </Typography>
//                           ))}
//                         </TableCell>
//                         <TableCell sx={{ borderRight: '3px solid white', textAlign: 'center' }}>
//                           <Typography sx={{ fontWeight: 'bold', color: 'black' }}>
//                             {hours.progress}
//                           </Typography>
//                         </TableCell>
//                         <TableCell>
//                           <Box display="flex" alignItems="center" gap={1}>
//                             <Typography sx={{ fontWeight: 'bold', color: 'black' }}>
//                               {hours.totalProgressPercentage}%
//                             </Typography>
//                             <LinearProgress
//                               variant="determinate"

//                               value={hours.totalProgressPercentage}
//                               sx={{
//                                 flex: 1, height: 8, borderRadius: 1, backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
//                                 '& .MuiLinearProgress-bar': {
//                                   backgroundColor: 'blue',
//                                 },
//                               }}

//                             />
//                           </Box>
//                         </TableCell>
//                       </TableRow>
//                     )
//                   })}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </>
//   );
// }

export default function BasicTable() {

  React.useEffect(() => {
    console.log(rows);
  }, []);

  const styles = useStyles();
  return (

    <Box className='tableBox1'>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className='tablehead1' >
            <TableRow sx={{ fontWeight: 'bold' }}>
              <TableCell />
              <TableCell sx={styles.tableHeading} >Name</TableCell>
              <TableCell sx={styles.tableHeading}>Update</TableCell>
              <TableCell sx={styles.tableHeading}>Role</TableCell>

              <TableCell sx={styles.tableHeading}>Projects</TableCell>
              <TableCell sx={styles.tableHeading}>Team</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {

              rows.map((row) => (

                projectRows.filter((project) => row.userId === project.userId).map((project, index) => (

                  <CollapsibleRow
                    key={`${row.userId}-${project.pName}`}
                    row={row}
                    projects={project}
                    hours={hoursData[index]}
                  />

                ))
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
