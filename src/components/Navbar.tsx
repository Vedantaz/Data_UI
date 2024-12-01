
import { IconButton, Typography, Toolbar, Box, AppBar, Menu, MenuItem, Avatar, Button } from '@mui/material';
import Sidebar from './Sidebar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function ButtonAppBar() {

  // get date as per requirement
  const getFormattedDate = (): string => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0'); 
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
    const year = today.getFullYear(); 

    // Format and return the date in 'dd/mm/yyyy' format
    return `${day}/${month}/${year}`;
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const location = useLocation();

  const isStatsPage = location.pathname === '/Stats';
    
  const formattedDate = getFormattedDate();
  return (

    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: '1E3A8A' }}>
          <div className="left" style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center  ' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Sidebar anchor={'left'} items={[]} buttonLabel={' '} />

            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              Employee Work Dashboard
            </Typography>

          </div>

          <div className="right" style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center  ' }}
          >
            <Button color='inherit' component={NavLink} to={isStatsPage ? '/' : '/Stats'} className='statsBtn'> {isStatsPage ? 'Dashboard' : 'Go Stats'}</Button>
            <Button color='inherit' component={NavLink} to={ '/employee-allocation'} className='statsBtn'> {'Employees'}</Button>

            <Typography variant="h6" component="div" sx={{ fontSize:18 ,fontWeight:'bold', backgroundColor:'1E3A8A', padding: '0.5rem 1rem 0.5rem 1rem', textAlign:'center', borderRadius: 20, boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.3)'}}>
              {formattedDate}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2, marginRight: 2, fontWeight:'bold' }}>
                Vedant
              </Typography>
              <IconButton onClick={handleClick} sx={{ color: 'white' }}>
                <Avatar sx={{height:50, width:50}} src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="Profile Picture"/>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ mt: 2 }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
            {/* <div >
              <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="aa" style={{ height: '50px', width: '50px', borderRadius: 50 }} />
            </div> */}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
