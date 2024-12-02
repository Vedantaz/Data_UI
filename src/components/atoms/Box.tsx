import React from 'react';
import { Box } from '@mui/material';

interface BoxAtomProps {
  children: React.ReactNode;
  sx?: object;
}

const BoxAtom: React.FC<BoxAtomProps> = ({ children, sx }) => {
  return <Box sx={sx}>{children}</Box>;
};

export default BoxAtom;
