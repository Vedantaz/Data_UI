import React, { useState } from 'react';
import { SelectChangeEvent, SwipeableDrawer } from '@mui/material';
import SidebarBtn from '../../atoms/sideBarBtn';
import Sidebar from '../../organisms/appSideBar';

type Anchor = 'left' | 'right' | 'top' | 'bottom';

interface SidebarTemplateProps {
  anchor: Anchor;
}
const SidebarTemplate: React.FC<SidebarTemplateProps> = ({ anchor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedEmpId, setSelectedEmpId] = useState('');

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };
  const handleProjectChange = (event: SelectChangeEvent<string>) => {
    setSelectedProject(event.target.value as string);
  };

  const handleEmpIdChange = (event: SelectChangeEvent<string>) => {
    setSelectedEmpId(event.target.value as string);
  };

  const projectOptions = ['Project A', 'Project B', 'Project C'];
  const empIdOptions = ['1', '2', '3']; 

  return (
    <>
      <SidebarBtn onClick={toggleDrawer(true)} />
      <SwipeableDrawer
        anchor={anchor}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}>
            
        <Sidebar
          selectedProject={selectedProject}
          selectedEmpId={selectedEmpId}
          handleProjectChange={handleProjectChange}
          handleEmpIdChange={handleEmpIdChange}
          projectOptions={projectOptions} 
          empIdOptions={empIdOptions}  
        />
      </SwipeableDrawer>
    </>
  );
};

export default SidebarTemplate;
