import React, { useEffect, useState } from 'react'

import ReactApexChart from 'react-apexcharts';
import "./circle.css"
const Circle = ({change, height, fontP, fontW}) => {
  console.log(change);
 
  
  const [chartData, setChartData] = useState({
    series: [change],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0,
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: fontP,
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: '#111',
              fontSize: fontW,
              show: true,
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#c92c14'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['Percent'],
    },
  });

  return (
    <div id="card">
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" height={height} />
      </div>
    </div>
  );

}

export default Circle



