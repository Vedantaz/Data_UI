
import { Toolbar, Box, AppBar } from '@mui/material';
import React, { useState } from 'react';
import {  useLocation } from 'react-router-dom';
import '../Templates/navbar/Navbar.css'
import SidebarTemplate from '../Templates/Sidebar';
import TypographyAtom from '../atoms/Typography';
import NavbarActions from '../molecules/NavbarActions';
import NavbarUserMenu from '../molecules/NavbarMenu';

interface NavbarProps {
  isStatsPage: boolean;
}

export const Navbar : React.FC<NavbarProps> = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const location = useLocation();
  const isStatsPage = location.pathname === '/Stats';

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  
  const getFormattedDate = (): string => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  };
  const formattedDate = getFormattedDate();
  const handleSelectToday = () => {
    setStartDate(new Date()); 
  };

  return (

   <AppBar position="static">
   <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: '#1E3A8A' }}>
     <Box sx={{ display: 'flex', alignItems: 'center' }}>
       <SidebarTemplate anchor="left" />
       <TypographyAtom variant="h6" styles={{ fontWeight: 'bold', marginLeft: 2 }}>
         Employee Work Dashboard
       </TypographyAtom>
     </Box>
     <Box sx={{ display: 'flex', alignItems: 'center' }}>
       <NavbarActions isStatsPage={isStatsPage} />
       <NavbarUserMenu />
     </Box>
   </Toolbar>
 </AppBar>
  );
};


    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: '1E3A8A' }}>
    //       <div className="left" style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center  ' }}>
    //           <SidebarTemplate anchor={'left'}/>
    //         <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
    //           Employee Work Dashboard
    //         </Typography>
    //       </div>

    //       <div className="right" style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center  ' }}
    //       >
    //         <Button color='inherit' component={NavLink} to={isStatsPage ? '/' : '/Stats'} className='statsBtn' sx={{ marginRight: 2 }} > {isStatsPage ? 'Dashboard' : 'Go Stats'}</Button>
    //         <Button color='inherit' component={NavLink} to={'/employee-allocation'} className='statsBtn' sx={{ marginRight: 2 }}> {'Employees'}</Button>
            
    //         <DatePicker />

    //         <Box sx={{ display: 'flex', alignItems: 'center' }}>
    //           <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2, marginRight: 2, fontWeight: 'bold' }}>
    //             Vedant
    //           </Typography>
    //           <IconButton onClick={handleClick} sx={{ color: 'white' }}>
    //             <Avatar sx={{ height: 50, width: 50 }} src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="Profile Picture" />
    //           </IconButton>
    //           <Menu
    //             anchorEl={anchorEl}
    //             open={Boolean(anchorEl)}
    //             onClose={handleClose}
    //             sx={{ mt: 2 }}
    //           >
    //             <MenuItem onClick={handleClose}>Profile</MenuItem>
    //             <MenuItem onClick={handleClose}>Logout</MenuItem>
    //           </Menu>
    //         </Box>
    //         {/* <div >
    //           <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="aa" style={{ height: '50px', width: '50px', borderRadius: 50 }} />
    //         </div> */}
    //       </div>
    //     </Toolbar>
    //   </AppBar>
    // </Box>

