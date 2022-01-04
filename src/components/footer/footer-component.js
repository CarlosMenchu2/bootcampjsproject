import React from 'react'

//Material UI
import { AppBar, Container, Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box } from '@mui/system';
import Link from '@mui/material/Link'


export const FooterComponent = () => {
    return (
            <AppBar  color='blackFooter' position="static" >
                <Container maxWidth='xl' sx={{pt:5, pb:3}}>
                    <Grid container justifyContent='space-between'>
                        <Grid item xs={12} md={4}>
                            <Stack>
                                <Typography
                                    color="white"
                                    variant="h6"
                                    component="div"
                                >
                                    Compañia
                                </Typography>
                                <Link color='white' href="#" underline="hover" sx={{mb:0.5}}>Nosotros</Link>
                                <Link color='white' href="#" underline="hover" sx={{mb:0.5}}>Contacto</Link>
                                <Link color='white' href="#" underline="hover">Soporte</Link>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack direction="row" spacing={1} justifyContent='center'>
                                <IconButton aria-label="facebook">
                                    <FacebookIcon sx={{color:'white'}} />        
                                </IconButton>
                                <IconButton aria-label="facebook">
                                    <TwitterIcon sx={{color:'white'}} />        
                                </IconButton>
                                <IconButton aria-label="facebook">
                                    <InstagramIcon sx={{color:'white'}} />        
                                </IconButton>
                                <IconButton aria-label="facebook">
                                    <WhatsAppIcon sx={{color:'white'}} />        
                                </IconButton>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid item xs={12} container justifyContent='flex-end'>
                                <Box>
                                    <Stack>
                                        <Typography
                                            color="white"
                                            variant="h6"
                                            component="div"
                                        >
                                            Legal
                                        </Typography>
                                        <Link color='white' href="#" underline="hover" sx={{mb:0.5}}>Terminos y Condiciones</Link>
                                        <Link color='white' href="#" underline="hover" sx={{mb:0.5}}>Politicas de privacidad</Link>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
    )
}
