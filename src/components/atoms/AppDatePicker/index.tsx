import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePickerAtom: React.FC = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker label="Select Date"  sx={{
            '& .MuiInputBase-root': {
              color: 'white',
              borderColor: 'white', 
            },
            '& .MuiInputBase-root.Mui-focused': {
              borderColor: 'white', 
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', 
            },
            '& .MuiInputBase-input': {
              color: 'white',
            },
            '& .MuiSvgIcon-root': {
              color: 'white',
            },
            '& .MuiInputBase-root:hover': {
              borderColor: 'white', 
            },
            '& .MuiOutlinedInput-root.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', 
            },
          }}  />
        </DemoContainer>
      </LocalizationProvider>
    );
};

export default DatePickerAtom;
