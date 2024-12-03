import React from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Timer as TimerIcon } from '@mui/icons-material';

interface TotalHoursItemProps {
  totalHours: number;
}

const TotalHoursItem: React.FC<TotalHoursItemProps> = ({ totalHours }) => (
  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon><TimerIcon /></ListItemIcon>
      <ListItemText
        primary={
          <Typography component="span">
            Total Hours:{" "}
            <Typography component="span" sx={{ color: 'green', fontWeight: 'bold' }}>
              {totalHours}
            </Typography>   
          </Typography> 
        }
      />
    </ListItemButton>
  </ListItem>
);

export default TotalHoursItem;
