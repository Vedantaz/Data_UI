import React, { useState } from 'react';
import { SelectChangeEvent, SwipeableDrawer } from '@mui/material';
import SidebarBtn from '../atoms/SidebarBtn';
import Sidebar from '../organisms/Sidebar';

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
        />
      </SwipeableDrawer>
    </>
  );
};

export default SidebarTemplate;