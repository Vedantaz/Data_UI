import React, { useState } from 'react';
import { Typography, Box, SwipeableDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Button, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { Inbox as InboxIcon, Mail as MailIcon, Assignment as AssignmentIcon, CheckCircle, AccessTime as AccessTimeIcon, Person as PersonIcon, Timer as TimerIcon } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import hoursData from './organisms/EmployeeTable';
type Anchor = 'left' | 'right' | 'top' | 'bottom';


interface SidebarProps {
  anchor: Anchor;
  items: { text: string; icon?: JSX.Element }[];
  footerItems?: { text: string; icon?: JSX.Element }[];
  buttonLabel: string;
}

const Sidebar: React.FC<SidebarProps> = ({ anchor, items, footerItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedEmpId, setSelectedEmpId] = useState('');

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  const handleProjectChange = (event: SelectChangeEvent<string>) => {
    setSelectedProject(event.target.value);
  };

  const handleEmpIdChange = (event: SelectChangeEvent<string>) => {
    setSelectedEmpId(event.target.value);

  };

  const renderList = () => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(true)}
      onKeyDown={toggleDrawer(true)}
    >
      {/* Main List */}
      {/* <List>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon || (index % 2 === 0 ? <InboxIcon /> : <MailIcon />)}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}

      {/* Divider and additional information */}
      <Divider />
      <List>
        {/* Status */}
        <ListItem disablePadding onClick={toggleDrawer(true)}>
          <ListItemButton sx={{
            '&:hover': {
              cursor: 'default',
              backgroundColor: '#f5f5f5',
            },
          }}>
            <ListItemIcon><CheckCircle /></ListItemIcon>
            <ListItemText primary={
              <Typography component="span">
                Status:{" "}
                <Typography component="span" sx={{ color: 'green', fontWeight: 'bold' }}>
                  Active
                </Typography>
              </Typography>
            } />
          </ListItemButton>
        </ListItem>

        {/* Emp ID Dropdown */}
        <ListItem disablePadding onClick={toggleDrawer(true)}>
          <ListItemButton>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <FormControl fullWidth>
              <InputLabel id="emp-id-label">Employee ID</InputLabel>
              <Select
                labelId="emp-id-label"
                value={selectedEmpId}
                label="Employee ID"
                onChange={handleEmpIdChange}
              >
                <MenuItem value="1">Emp ID 1</MenuItem>
                <MenuItem value="2">Emp ID 2</MenuItem>
                <MenuItem value="3">Emp ID 3</MenuItem>
              </Select>
            </FormControl>
          </ListItemButton>
        </ListItem>

        {/* Project Dropdown */}
        <ListItem disablePadding onClick={toggleDrawer(true)}>
          <ListItemButton>
            <ListItemIcon><AssignmentIcon /></ListItemIcon>
            <FormControl fullWidth>
              <InputLabel id="project-label">Project</InputLabel>
              <Select
                labelId="project-label"
                value={selectedProject}
                label="Project"
                onChange={handleProjectChange}
              >
                <MenuItem value="Project A">Project A</MenuItem>
                <MenuItem value="Project B">Project B</MenuItem>
                <MenuItem value="Project C">Project C</MenuItem>
              </Select>
            </FormControl>
          </ListItemButton>
        </ListItem>

        {/* Total Hours */}
        <ListItem disablePadding onClick={toggleDrawer(true)}>
          <ListItemButton sx={{
            '&:hover': {
              cursor: 'default',
              backgroundColor: '#f5f5f5',
            },
          }}>
            <ListItemIcon><TimerIcon /></ListItemIcon>
            <ListItemText primary={
              <Typography component="span">
                Total Hours:{" "}
                <Typography component="span" sx={{ color: 'green', fontWeight: 'bold' }}>
                  200
                </Typography>
              </Typography>
            } />
          </ListItemButton>
        </ListItem>
      </List>
      {footerItems && (
        <>
          <Divider />
          <List>
            {footerItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon || <MailIcon />}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );

  return (
    <>
      {/* Button to open the sidebar */}
      <div className="" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </div>


      {/* SwipeableDrawer */}
      <SwipeableDrawer
        anchor={anchor}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {renderList()}
      </SwipeableDrawer>
    </>
  );
};

export default Sidebar;
