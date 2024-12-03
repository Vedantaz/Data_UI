import React from 'react';
import { Box, Typography } from '@mui/material';

interface TaskLabelProps {
  task: string;
};

 const TaskLabel: React.FC<TaskLabelProps> = ({ task }) => {
  return (
    <Typography>
      {task}
      <Box
        sx={{
          marginLeft: 1,
          marginBottom: 1,
          display: 'inline-block',
          padding: '3px 6px',
          backgroundColor: 'black',
          borderRadius: '12px',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 12,
          textAlign: 'center',
        }}
      >
        (1 Hr)
      </Box>
    </Typography>
  );
};
export default TaskLabel;