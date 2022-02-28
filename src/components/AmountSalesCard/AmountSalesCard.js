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

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
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
            max: 10000,
            ticks: {
                stepSize: 2000
            },
            },
        x:{

        }
    },
};
  
const labels = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  
export const data = {
    labels,
    datasets: [
        {
        label: 'Ventas diarias',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
        backgroundColor: 'rgba(230, 152, 44, 0.8)',
        },
    ],
};

export const AmountSalesCard = () => {
  return (
    <Card sx={{ maxWidth: 600, width:"100%" }}>
        <CardHeader 
            avatar={
                <AttachMoneyIcon fontSize='large' />
            }
            title={
                <Typography
                    variant='h5'
                    component='div'
                >
                    Ventas diarias
                </Typography>
            }
        />
        <CardContent>
            <Bar options={options} data={data} />
        </CardContent>
    </Card>
  )
}
