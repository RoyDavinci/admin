import React from 'react';
import BarChart from '../../charts/BarChart01';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04({datasets}) {

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
    ],
    datasets: datasets,
    // [
    //   // Light blue bars
    //   {
    //     label: 'Direct',
    //     data: [
    //       800, 1600, 900, 1300, 1950, 1700,
    //     ],
    //     backgroundColor: color,
    //     barPercentage: 0.66,
    //     categoryPercentage: 0.66,
    //   },
    //   // Blue bars
    //   {
    //     label: 'Indirect',
    //     data: [
    //       4900, 2600, 5350, 4800, 5200, 4800,
    //     ],
    //     backgroundColor: color,
    //     hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
    //     barPercentage: 0.66,
    //     categoryPercentage: 0.66,
    //   },
    // ],
  };

  return (
    <div>
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard04;
