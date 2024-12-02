import React from 'react';
import ButtonAtom from '../atoms/Button';

interface ButtonGroupProps {
  view: 'project' | 'resource';
  setView: React.Dispatch<React.SetStateAction<'project' | 'resource'>>;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ view, setView }) => {
  return (
    <div>
      <ButtonAtom
        label="Project Allocation"
        variant="contained"
        color={view === 'project' ? 'primary' : 'secondary'}
        onClick={() => setView('project')}
      />
      <ButtonAtom
        label="Resource Allocation"
        variant="contained"
        color={view === 'resource' ? 'primary' : 'secondary'}
        onClick={() => setView('resource')}
      />
    </div>
  );
};

export default ButtonGroup;
