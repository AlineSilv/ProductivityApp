//npm install chart.js
//npm install react-chartjs-2

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale
} from 'chart.js';

interface BarChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
      
    }[];
  };
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  // console.log("BarChart Data:", data);
  Chart.register(CategoryScale, LinearScale, BarElement, BarController);
  const options = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        ticks: {
          color: 'white',
          
        },
        grid: {
          color:'#cccc',
          lineWidth: 1,
        },
      },
      x: {
        type: 'category',
        grid: {
          color:'#252F64',
          lineWidth: 10,
        },
        ticks: {
          color: 'white',
        },
      },
    },
  };
  return <Bar data={data} options={options as any} />;
};

export default BarChart;
