import { Box, Button, Container, Grid, TextField } from '@mui/material';
import React from 'react';

const FormMail = () => {
    return (
        <form style={{maxWidth:450, width:'100%'}}>
            <TextField variant='outlined' label='Correo' sx={{width:'100%'}} />
            <Button variant='contained' disableElevation sx={{mt:3, width:'100%'}}>Enviar Correo</Button>
        </form>
    )
}

const Forgotpassword = () => {
    return (
        <Container maxWidth='xl'>
            <Grid container justifyContent='center' alignItems='center'sx={{height:'100vh'}}>
                <Box maxWidth={500} width='100%'>
                    <Grid container justifyContent='center'> 
                        <FormMail />
                    </Grid>
                </Box>
            </Grid>
        </Container>
    )
};

export default Forgotpassword;
