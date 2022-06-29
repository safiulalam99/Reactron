import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
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
        text: 'Prices by project per hour',
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
        label: 'Price',
        data: duration.map((d) => d),
        borderColor: 'rgb(39,170,225)',
        backgroundColor: 'rgb(39,170,225)',
      },
    ],
  };


  return <Bar options={options} data={graphData} />;
}
