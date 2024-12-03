import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Box } from '@mui/material';
import AvatarAtom from '../atoms/Avatar';
import TypographyAtom from '../atoms/Typography';

const NavbarUserMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TypographyAtom variant="h6" styles={{ marginLeft: 2, marginRight: 2 }} > Vedant </TypographyAtom>
            {/* <TypographyAtom variant="h6" text="Vedant" styles={{ marginLeft: 2, marginRight: 2 }} /> */}
            <IconButton onClick={handleClick} sx={{ color: 'white' }}>
                <AvatarAtom src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="Profile Picture" />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </Box>
    );
};

export default NavbarUserMenu;
