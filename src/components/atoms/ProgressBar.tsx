import React from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';

interface ProgressBarProps {
  progress: number;
  sx?: object;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, sx }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
        <Typography sx={{ fontWeight: 'bold', color: 'black' }}>
          {progress}%
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            width: '100%',
            height: 8,
            borderRadius: 1,
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            '& .MuiLinearProgress-bar': {
              backgroundColor: 'blue',
            },
            ...sx,
          }}
        />
      </Box>
    </Box>
  );
};
