import { AppBtn } from '@/components/atoms';
import React from 'react';


interface ButtonGroupProps {
  view: 'project' | 'resource';
  setView: React.Dispatch<React.SetStateAction<'project' | 'resource'>>;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ view, setView }) => {
  return (
    <div>
      <AppBtn
        label="Project Allocation"
        variant="contained"
        color={view === 'project' ? 'primary' : 'secondary'}
        onClick={() => setView('project')}
      />
      <AppBtn
        label="Resource Allocation"
        variant="contained"
        color={view === 'resource' ? 'primary' : 'secondary'}
        onClick={() => setView('resource')}
      />
    </div>
  );
};

export default ButtonGroup;
