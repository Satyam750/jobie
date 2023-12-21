import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 5000, 2390, 3490];
const pData = [2400, 1398, 4000, 3908, 4800, 3800, 4300];
const xLabels = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
];

export default function ChartG() {
  return (
    <LineChart
      width={600}
      height={300}
      series={[
        { data: pData, label: 'View Profile' },
        { data: uData, label: 'Hire' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}
