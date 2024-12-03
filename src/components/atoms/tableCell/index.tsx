import React, { ReactNode } from 'react';
import { TableCell, Typography,  SxProps, Theme } from '@mui/material';

interface TableCellProps {
  text?: ReactNode; 
  sx?: SxProps<Theme>;
  children?:ReactNode;
}

const AppTableCell: React.FC<TableCellProps> = ({ text, sx, children, ...rest  }) => {
  return (
    <TableCell sx={sx} {...rest}>
      {text ? (
        <Typography sx={{ fontSize: 16 }}>{text}</Typography>
      ) : (children)}       
      {/* // Render children if no text is provided */}

      <Typography sx={{ fontSize: 16 }}>{text}</Typography>
    </TableCell>
  );
};
export default AppTableCell;