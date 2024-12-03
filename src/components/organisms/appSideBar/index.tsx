import React from 'react';
import { Box, List, Divider, SelectChangeEvent } from '@mui/material';
import StatusItem from '../../atoms/employeeStatus';
import SelectMenu from '../../molecules/selectMenu';
import TotalHoursItem from '../../atoms/TotalHoursItem';

interface SidebarProps {

  selectedProject: string;
  selectedEmpId: string;
  handleProjectChange: (event: SelectChangeEvent<string>) => void;
  handleEmpIdChange: (event: SelectChangeEvent<string>) => void;
  projectOptions: string[]; // Dynamically passed project options
  empIdOptions: string[]; 
}

const Sidebar: React.FC<SidebarProps> = ({ selectedProject, selectedEmpId, handleProjectChange, handleEmpIdChange, projectOptions, empIdOptions }) => {
  return (
    <Box sx={{ width: 250 }} role="presentation">
      {/* <Divider /> */}
      <List>
        <StatusItem status="Active" />
        {/* <SelectMenu label="Employee ID" value={selectedEmpId} onChange={handleEmpIdChange} options={['1', '2', '3']} /> */}
        <SelectMenu label="Employee ID" value={selectedEmpId} onChange={handleEmpIdChange} options={empIdOptions} />
        <SelectMenu label="Project" value={selectedProject} onChange={handleProjectChange} options={projectOptions} />
        {/* <SelectMenu label="Project" value={selectedProject} onChange={handleProjectChange} options={['Project A', 'Project B', 'Project C']} /> */}
        <TotalHoursItem totalHours={200} />
      </List>
    </Box>  
  );
};

export default Sidebar;