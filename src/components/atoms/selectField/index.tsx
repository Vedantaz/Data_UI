
import React from 'react';
import { Select as MuiSelect, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';

interface SelectProps {
    value: string;
    onChange: (event: SelectChangeEvent<string>) => void;
    label: string;
    options: string[];
}   
const Select: React.FC<SelectProps> = ({ value, onChange, label, options }) => {
    return (
        <FormControl className='formControl' sx={{ width: 400 }} >
            <InputLabel className='inputLabel' id="demo-simple-select-label" >{label}</InputLabel>
            <MuiSelect value={value} onChange={onChange} label={label} className='selectInput' labelId="demo-simple-select-label"
                id="demo-simple-select" >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem> 
                ))}
            </MuiSelect>
        </FormControl>
    );
};

export default Select;
