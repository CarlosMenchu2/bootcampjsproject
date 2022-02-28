import React from 'react'

//Chart Js
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
import {faker} from '@faker-js/faker';

//
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader'
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
  
  export const options = {
    responsive: true,
    scales: {
      y:{
          min: 0,
          max: 1000,
          ticks: {
            stepSize: 200
          },
        },
      x:{

      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
    maintainAspectRatio: false
  };
  
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
export const data = {
    labels,
    datasets: [
        {
        label: 'Trafico',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(255, 68, 34)',
        backgroundColor: 'rgba(255, 68, 34, 0.9)',
        }
    ],
};
export const SalesCard = () => {
  return (
    <Card sx={{ maxWidth: 1344, width:"100%"}}>
        <CardHeader 
          title='Trafico'
          subheader='Enero 2022 - Julio 2022'
        />
        <CardContent>
            <Line options={options} data={data} height={350} />
        </CardContent>
    </Card>
    
  )
}
