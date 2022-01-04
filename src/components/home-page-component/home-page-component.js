import React from 'react';

//Material UI
import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import Container from '@mui/material/Container';
//Static Files
import image1 from '../../assets/img/image1.png'
import { CardComponent } from '../card/card-component';
import { FooterComponent } from '../footer/footer-component';


export const HomePageComponent = () => {
    return (
        <>
        <Grid container  alignItems='center' justifyContent='center' sx={{height:'550px', backgroundColor:'#ECEAEA'}}>
            <Grid container justifyContent='center' xs={6}>
                <Box>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{fontWeight:'bold', fontSize:'6rem', wordBreak:'break-all',paddingLeft:'30px'}}
                    >
                        CLÁSICO
                    </Typography>
                    <Typography
                        variant='h2'
                        component='div'
                        sx={{fontWeight:'bold', fontSize:'6rem', wordBreak:'break-all',paddingLeft:'30px'}}
                    >
                        CON
                    </Typography>
                    <Typography
                        variant='h2'
                        component='div'
                        sx={{fontWeight:'bold', fontSize:'6rem', wordBreak:'break-all',paddingLeft:'30px'}}
                    >
                        TOQUE
                    </Typography>
                    <Typography
                        variant='h2'
                        component='div'
                        sx={{fontWeight:'bold', fontSize:'6rem', wordBreak:'break-all',paddingLeft:'30px'}}
                    >
                        NATURAL
                    </Typography>
                </Box>
            </Grid>
            <Grid container justifyContent='center' xs={6}>
                <img src={image1} alt='intro'/>
            </Grid>
        </Grid>
        <Container maxWidth='xl' sx={{mt:10, mb:10}}>
            <Typography
                variant='h4'
                component='div'
                sx={{fontWeight:'bold', mb:3.5}}
            >
                Nuevos Productos
            </Typography>
            <Grid container justifyContent='space-between'>
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
        <FooterComponent />
        </>
    )
}
