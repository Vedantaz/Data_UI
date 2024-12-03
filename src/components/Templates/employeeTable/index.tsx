import React from 'react';
import BoxAtom from '../../atoms/AppBox';
import { BasicTable } from '../../organisms';

const EmployeePage: React.FC = () => {
  return (
    <BoxAtom>
      <BasicTable />
    </BoxAtom>
  );
};

export default EmployeePage;
