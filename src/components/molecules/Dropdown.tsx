// src/components/molecules/EmployeeDropdown.tsx
import React from 'react';
import Select from '../atoms/Select';
import { Select as MuiSelect,  SelectChangeEvent } from '@mui/material';

interface EmployeeDropdownProps {
    selectedUser: string;
    handleUserChange: (event: SelectChangeEvent<string>) => void;
    users: string[];
}

const EmployeeDropdown: React.FC<EmployeeDropdownProps> = ({ selectedUser, handleUserChange, users }) => {
    return <MuiSelect value={selectedUser} onChange={handleUserChange} label="Select Employee"/>;
};

export default EmployeeDropdown;
