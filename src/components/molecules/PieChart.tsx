import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import BoxAtom from '../atoms/Box';
import TypographyAtom from '../atoms/Typography';

interface PieChartProps {
  data: any;
  options: ChartOptions<'pie'>;
  userProjectDataLength: number;
}

const PieChart: React.FC<PieChartProps> = ({ data, options, userProjectDataLength }) => {

  return (
    <BoxAtom sx={{ marginTop: 3, width: 400, height: 400 }}>
                {userProjectDataLength > 0 ? (
                    <Pie data={data} options={options} />
                ) : (
                    <TypographyAtom variant="h6" >No data available</TypographyAtom>
                )}
            </BoxAtom>
  )
};

export default PieChart;
