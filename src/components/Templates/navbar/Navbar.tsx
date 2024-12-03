import React from 'react';
import { Box } from '@mui/material';
import { Navbar } from '../../organisms/Navbar';
import { useLocation } from 'react-router-dom';

const NavbarTemplate: React.FC = () => {
    const location = useLocation();
    const isStatsPage = location.pathname === '/Stats';

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navbar isStatsPage={isStatsPage} />
        </Box>
    );
};

export default NavbarTemplate;
