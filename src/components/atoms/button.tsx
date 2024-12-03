import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { NavLink } from 'react-router-dom';


interface ButtonAtomProps extends ButtonProps{
  label: string;
  to?: string;
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
  onClick?: () => void;
  styles?: object;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({ label, 
  to, 
  onClick, 
  styles, 
  ...rest }) => {

    const buttonComponent = to                                   // // Conditionally use NavLink for routing
    ? { component: NavLink, to } 
    : {};

  return (
    <Button {...rest}  {...buttonComponent} onClick={onClick} sx={styles}>
      {label}
    </Button>
  );
};

export default ButtonAtom;
