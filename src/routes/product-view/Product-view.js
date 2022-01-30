import React, {useState} from 'react'

import {CardComponent} from '../../components/card/card-component'

//Material UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

//Static Files
import m1 from '../../assets/img/m1.jpg';

import { Typography } from '@mui/material';
import { Box } from '@mui/system';
//import { FooterComponent } from '../footer/footer-component';


const FormBuyComponent = () =>{

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <form style={{marginTop:'15px'}}>
            <Box sx={{maxWidth:300}}>
                <Stack spacing={3}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        required
                        label='Cantidad'
                        variant='outlined'
                        type='number'
                    >

                    </TextField>
                    <Button variant="contained" disableElevation color='button'>
                        Comprar
                    </Button>
                </Stack>
            </Box>
        </form>
    )
}


export const ProductView = () => {
    return (
        <>
        <Container maxWidth='xl' sx={{mt:5}}>
            <Grid container justifyContent='space-between'>
                <Grid item container xs={12} md={6} justifyContent='center' >
                    <img src={m1} width="500" height="600"/>
                </Grid>
                <Grid item container xs={12} md={6} alignItems='center' >
                    <Stack>
                        <Typography
                            variant='h4'
                            component='div'
                            sx={{fontWeight:'bold'}}
                        >
                            Camiseta
                        </Typography>
                        <Rating name="read-only" value={3} readOnly /> 
                        <Typography
                            variant='body1'
                            component='div'
                            
                        >
                            Q 150.00
                        </Typography>
                        <Typography 
                            variant='body2'
                            component='div'
                        >
                            Simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum 
                            has been the industry's standard dummy 
                            text ever since the 1500s
                        </Typography>
                        <FormBuyComponent />
                    </Stack>
                </Grid>
            </Grid>
            <Grid container justifyContent='space-between' sx={{mt:10,mb:10}}>
                <Grid item md={3} xs={12}>
                    <CardComponent />
                </Grid>
                <Grid item md={3} xs={12}>
                    <CardComponent />
                </Grid>
                <Grid item md={3} xs={12}>
                    <CardComponent />
                </Grid>
                <Grid item md={3} xs={12}>
                    <CardComponent />
                </Grid>
            </Grid>
        </Container>
        {/* <FooterComponent/> */}
        </>
    )
}
