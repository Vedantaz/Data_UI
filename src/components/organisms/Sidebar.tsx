import React, { useState } from 'react';
import { Typography, Box, SwipeableDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Button, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { Inbox as InboxIcon, Mail as MailIcon, Assignment as AssignmentIcon, CheckCircle, AccessTime as AccessTimeIcon, Person as PersonIcon, Timer as TimerIcon } from '@mui/icons-material';
import StatusItem from '../atoms/StatusItem';
import SelectMenu from '../molecules/SelectMenu';
import TotalHoursItem from '../atoms/TotalHoursItem';

interface SidebarProps {
  // anchor: Anchor;
  // items: { text: string; icon?: JSX.Element }[];
  // footerItems?: { text: string; icon?: JSX.Element }[];
  // buttonLabel: string;

  selectedProject: string;
  selectedEmpId: string;
  handleProjectChange: (event: SelectChangeEvent<string>) => void;
  handleEmpIdChange: (event: SelectChangeEvent<string>) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedProject, selectedEmpId, handleProjectChange, handleEmpIdChange }) => {

  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedProject, setSelectedProject] = useState('');
  // const [selectedEmpId, setSelectedEmpId] = useState('');

  // const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
  //   if (
  //     event &&
  //     event.type === 'keydown' &&
  //     ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
  //   ) {
  //     return;
  //   }
  //   setIsOpen(open);
  // };

  // const handleProjectChange = (event: SelectChangeEvent<string>) => {
  //   setSelectedProject(event.target.value);
  // };

  // const handleEmpIdChange = (event: SelectChangeEvent<string>) => {
  //   setSelectedEmpId(event.target.value);
  // };

  // const renderList = () => (
  //   <Box
  //     sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer(true)}
  //     onKeyDown={toggleDrawer(true)}>

  //     <Divider />
  //     <List>
  //       <ListItem disablePadding onClick={toggleDrawer(true)}>
  //         <ListItemButton sx={{
  //           '&:hover': {
  //             cursor: 'default',
  //             backgroundColor: '#f5f5f5',
  //           },
  //         }}>
  //           <ListItemIcon><CheckCircle /></ListItemIcon>
  //           <ListItemText primary={
  //             <Typography component="span">
  //               Status:{" "}
  //               <Typography component="span" sx={{ color: 'green', fontWeight: 'bold' }}>
  //                 Active
  //               </Typography>
  //             </Typography>
  //           } />
  //         </ListItemButton>
  //       </ListItem>

  //       <ListItem disablePadding onClick={toggleDrawer(true)}>
  //         <ListItemButton>
  //           <ListItemIcon><PersonIcon /></ListItemIcon>
  //           <FormControl fullWidth>
  //             <InputLabel id="emp-id-label">Employee ID</InputLabel>
  //             <Select
  //               labelId="emp-id-label"
  //               value={selectedEmpId}
  //               label="Employee ID"
  //               onChange={handleEmpIdChange}
  //             >
  //               <MenuItem value="1">Emp ID 1</MenuItem>
  //               <MenuItem value="2">Emp ID 2</MenuItem>
  //               <MenuItem value="3">Emp ID 3</MenuItem>
  //             </Select>
  //           </FormControl>
  //         </ListItemButton>
  //       </ListItem>

  //       <ListItem disablePadding onClick={toggleDrawer(true)}>
  //         <ListItemButton>
  //           <ListItemIcon><AssignmentIcon /></ListItemIcon>
  //           <FormControl fullWidth>
  //             <InputLabel id="project-label">Project</InputLabel>
  //             <Select
  //               labelId="project-label"
  //               value={selectedProject}
  //               label="Project"
  //               onChange={handleProjectChange}
  //             >
  //               <MenuItem value="Project A">Project A</MenuItem>
  //               <MenuItem value="Project B">Project B</MenuItem>
  //               <MenuItem value="Project C">Project C</MenuItem>
  //             </Select>
  //           </FormControl>
  //         </ListItemButton>
  //       </ListItem>

  //       <ListItem disablePadding onClick={toggleDrawer(true)}>
  //         <ListItemButton sx={{
  //           '&:hover': {
  //             cursor: 'default',
  //             backgroundColor: '#f5f5f5',
  //           },
  //         }}>
  //           <ListItemIcon><TimerIcon /></ListItemIcon>
  //           <ListItemText primary={
  //             <Typography component="span">
  //               Total Hours:{" "}
  //               <Typography component="span" sx={{ color: 'green', fontWeight: 'bold' }}>
  //                 200
  //               </Typography>
  //             </Typography>
  //           } />
  //         </ListItemButton>
  //       </ListItem>
  //     </List>

  //   </Box>
  // );

  return (
    <Box sx={{ width: 250 }} role="presentation">
      <Divider />
      <List>
        <StatusItem status="Active" />
        <SelectMenu label="Employee ID" value={selectedEmpId} onChange={handleEmpIdChange} options={['1', '2', '3']} />
        <SelectMenu label="Project" value={selectedProject} onChange={handleProjectChange} options={['Project A', 'Project B', 'Project C']} />
        <TotalHoursItem totalHours={200} />
      </List>
    </Box>  
  );
};

export default Sidebar;

 {/* <div className="" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </div>

      <SwipeableDrawer
        anchor={anchor}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {renderList()}
      </SwipeableDrawer> */}