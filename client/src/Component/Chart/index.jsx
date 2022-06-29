import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

 

export default function Charts({date,duration}) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      subtitle: {
        display: true,
        text: 'Chart Subtitle',
      },
        
      title: {
        display: true,
        text: 'Work history',
      },
    },
  };
  
  const labels = date
   const graphData = {
    labels,
      subtitle: {
        display: true,
        text: 'Chart Subtitle',
      },
    datasets: [
      {
        label: 'Hours',
        data: duration.map((d) => d),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


  return <Line options={options} data={graphData} />;
}
