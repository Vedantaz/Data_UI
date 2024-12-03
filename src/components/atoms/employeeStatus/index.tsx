import React from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

interface StatusItemProps {
  status: string;
}

const StatusItem: React.FC<StatusItemProps> = ({ status }) => (
  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon><CheckCircle /></ListItemIcon>
      <ListItemText
        primary={
          <Typography component="span">
            Status:{" "}
            <Typography component="span" sx={{ color: 'green', fontWeight: 'bold' }}>
              {status}
            </Typography>
          </Typography>
        }
      />
    </ListItemButton>
  </ListItem>
);
export default StatusItem;
