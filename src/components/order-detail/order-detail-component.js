
import React from 'react'

//Material UI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Grid, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, fontSize } from '@mui/material';
import { FooterComponent } from '../footer/footer-component';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
  
const rows = [
    createData('Producto A', 2, 6.0, 24, 4.0),
    createData('Producto B', 3, 9.0, 37, 4.3),
    createData('Producto C', 2, 16.0, 24, 6.0),
    createData('Producto D', 3, 3.7, 67, 4.3),
    createData('Producto E', 3, 16.0, 49, 3.9),
];

const ProductTable = () => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontWeight:'bold',fontSize:'1rem'}}>Producto</TableCell>
                        <TableCell align="right" sx={{fontWeight:'bold',fontSize:'1rem'}}>Cantidad</TableCell>
                        <TableCell align="right" sx={{fontWeight:'bold',fontSize:'1rem'}}>Precio</TableCell>
                        <TableCell align="right" sx={{fontWeight:'bold',fontSize:'1rem'}}>Subtotal</TableCell>
                        <TableCell align="right" sx={{fontWeight:'bold',fontSize:'1rem'}}>Total</TableCell>
                        <TableCell ></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        hover
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            <TableCell align="right">
                                <IconButton aria-label='delete'>
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}

                    <TableRow>
                        <TableCell rowSpan={3} colSpan={3} />
                        <TableCell colSpan={2} sx={{fontWeight:'bold', fontSize:'1rem'}}>Total</TableCell>
                        <TableCell align="right" sx={{fontSize:'1rem'}}>{12}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export const OrderDetailComponent = () => {
    return (
        <>
        <Container maxWidth='xl' sx={{mt:10,mb:10}}>
            <Typography
                variant='h4'
                component='div'
                sx={{mb:5}}
            >
                Detalle del pedido
            </Typography>
            <ProductTable />
            <Box sx={{mt:4}}>
                <Grid container justifyContent='end'>
                    <Button variant="contained" color='button' disableElevation sx={{maxWidth:250, width:'100%'}}> Comprar</Button>
                </Grid>
            </Box>
        </Container>
        <FooterComponent />
        </>
    )
}
