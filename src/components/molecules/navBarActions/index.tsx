import React from 'react';
import DatePickerAtom from '../../atoms/AppDatePicker';
import ButtonAtom from '../../atoms/AppBtn';

interface NavbarActionsProps {
    isStatsPage: boolean;
  }


const NavbarActions: React.FC<NavbarActionsProps> = ({ isStatsPage }) => {
    return (
        <>
            <ButtonAtom label={isStatsPage ? 'Dashboard' : 'Go Stats'} to={isStatsPage ? '/' : '/Stats'} styles={{ marginRight: 2 }} />
            <ButtonAtom label="Employees" to="/employee-allocation" styles={{ marginRight: 2 }} />
            <DatePickerAtom />
        </>
    );
};

export default NavbarActions;
