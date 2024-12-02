import React, { ReactNode } from 'react';
import { TableCell, Typography } from '@mui/material';

interface TableCellProps {
//   text: string | number;
  text: ReactNode;  // Accepts string, number, or JSX elements
  sx?: object;
}

export const TableCellComponent: React.FC<TableCellProps> = ({ text, sx }) => {
  return (
    <TableCell sx={sx}>
      <Typography sx={{ fontSize: 16 }}>{text}</Typography>
    </TableCell>
  );
};
