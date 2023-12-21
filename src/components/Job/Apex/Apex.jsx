import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Apex = ({score}) => {
  const [chartData, setChartData] = useState({
    series: [score],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
        
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
            
         
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: 2,
              show: false,
              color: '#888',
              fontSize: "10px",
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: '#111',
              fontSize: "25px",
              marginLeft:"90vw",
              show: true,
            },
          },
        },
      },
      labels: [''],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" height={150} />
    </div>
  );
};

export default Apex;
