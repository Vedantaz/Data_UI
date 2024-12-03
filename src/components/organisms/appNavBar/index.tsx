
import { Toolbar, Box, AppBar } from '@mui/material';
import React, { useState } from 'react';
import {  useLocation } from 'react-router-dom';
import './styles.css'
import SidebarTemplate from '../../Templates/appSideBar';
import TypographyAtom from '../../atoms/typographies';
import NavbarActions from '../../molecules/navBarActions';
import NavbarUserMenu from '../../molecules/navBarMenu';


interface NavbarProps {
  isStatsPage: boolean;
}

const Navbar : React.FC<NavbarProps> = () => {

  const location = useLocation();
  const isStatsPage = location.pathname === '/Stats';

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
export default Navbar;