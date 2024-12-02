import React from 'react';
import { Button } from '@mui/material';

interface ButtonAtomProps {
  label: string;
  variant: 'contained' | 'outlined';
  color: 'primary' | 'secondary';
  onClick: () => void;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({ label, variant, color, onClick }) => {
  return (
    <Button variant={variant} color={color} onClick={onClick}>
      {label}
    </Button>
  );
};

export default ButtonAtom;
