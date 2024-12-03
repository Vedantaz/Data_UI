import React from 'react';
import { ListItem, ListItemButton, ListItemIcon, SelectChangeEvent } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SelectField from '../../atoms/selectField';

interface SelectMenuProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: string[];
}

const SelectMenu: React.FC<SelectMenuProps> = ({ label, value, onChange, options }) => (
  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon><AssignmentIcon /></ListItemIcon>
      <SelectField label={label} value={value} onChange={onChange} options={options} />
    </ListItemButton>
  </ListItem>
)
export default SelectMenu;