import React from 'react';
import CustomSelect from '../atoms/Select';
import { SelectChangeEvent } from '@mui/material';

interface EmployeeSelectorProps {
  selectedUser: string;
  handleUserChange: (event: SelectChangeEvent<string>) => void;
  employees: string[];
}

const EmployeeSelector: React.FC<EmployeeSelectorProps> = ({ selectedUser, handleUserChange, employees }) => {
  return (
    <CustomSelect
      value={selectedUser}
      onChange={handleUserChange}
      label="Select Employee"
      options={employees}
    />
  );
};

export default EmployeeSelector;
