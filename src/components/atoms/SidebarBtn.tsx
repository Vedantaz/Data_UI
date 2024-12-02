import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface SidebarButtonProps {
  onClick:  (event: React.MouseEvent | React.KeyboardEvent)=> void;
}

const SidebarBtn: React.FC<SidebarButtonProps> = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <MenuIcon />
  </IconButton>
);

export default SidebarBtn;
