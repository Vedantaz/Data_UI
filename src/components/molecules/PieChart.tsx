import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';

interface PieChartProps {
  data: any;
  options: ChartOptions<'pie'>;
}

const PieChart: React.FC<PieChartProps> = ({ data, options }) => {
  return <Pie data={data} options={options} />;
};

export default PieChart;
