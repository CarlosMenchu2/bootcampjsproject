import React from 'react'

//Chart Js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'

//MateriaL UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader'

//Material Icons
import NumbersIcon from '@mui/icons-material/Numbers';
import { Typography } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    scales: {
        y:{
            min: 0,
            max: 2000,
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
        text: 'Chart.js Bar Chart',
        },
    },
};
  
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
export const data = {
    labels,
    datasets: [
        {
        label: 'Numero de Ventas',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 2000 })),
        backgroundColor: 'rgba(255, 68, 34, 0.8)',
        },
    ],
};

export const ViewSiteCard = () => {
  return (
    <Card sx={{ maxWidth: 600, width:"100%" }}>
        <CardHeader
            avatar={
                <NumbersIcon fontSize='large'/>
            } 
            title={
                <Typography 
                    variant='h5'
                    component='div'
                > Numero de Ventas</Typography>
            }
        />
        <CardContent>
            <Bar options={options} data={data} />
        </CardContent>
    </Card>
  )
}
