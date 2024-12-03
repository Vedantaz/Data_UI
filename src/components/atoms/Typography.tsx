import React from 'react';
import { Typography } from '@mui/material';

interface TypographyAtomProps {
  variant: 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
  children: React.ReactNode;
  styles?:object;
}

const TypographyAtom: React.FC<TypographyAtomProps> = ({ variant, children, styles }) => {
  return <Typography variant={variant} sx={styles}>{children} </Typography>;
};

export default TypographyAtom;
