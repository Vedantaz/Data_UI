// src/components/atoms/Select.tsx
import React, { useState, useEffect } from 'react';
import { Select as MuiSelect, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import { rows } from '../organisms/EmployeeTable';

interface SelectProps {
    value: string;
    onChange: (event: SelectChangeEvent<string>) => void;
    label: string;
    options: string[];
}   


const Select: React.FC<SelectProps> = ({ value, onChange, label, options }) => {
    return (
        <FormControl className='formControl' sx={{ width: 400 }} >
            <InputLabel className='inputLabel' id="demo-simple-select-label" >Select Employee</InputLabel>
            <MuiSelect value={value} onChange={onChange} label={label} className='selectInput' labelId="demo-simple-select-label"
                id="demo-simple-select" >

                {rows.map((row) => (
                    <MenuItem key={row.name} value={row.name}>
                        {row.name}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
};

export default Select;
