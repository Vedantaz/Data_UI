import React from 'react';
import { Typography } from '@mui/material';

interface TypographyAtomProps {
  variant: 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
  children: React.ReactNode;
}

const TypographyAtom: React.FC<TypographyAtomProps> = ({ variant, children }) => {
  return <Typography variant={variant}>{children}</Typography>;
};

export default TypographyAtom;
