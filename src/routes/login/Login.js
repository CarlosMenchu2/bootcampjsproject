import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';

const FormLogin = () => {

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <form style={{maxWidth:500, width:'100%'}}>
            <Grid container direction='column' flex={1} maxWidth={450} spacing={2}>
                <Grid item xs={12}>
                    <Typography
                        variant='h3'
                        component='div'
                        textAlign='center'
                    >
                        Inicio de Sesion
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <TextField id="outlined-basic" label="Usuario o correo" variant="outlined"  sx={{width:'100%'}}/>
                </Grid>
                <Grid item xs={12}>
                    <FormControl variant="outlined" sx={{width:'100%'}}>
                        <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <NavLink to='/admin'>
                        <Button variant='contained' disableElevation sx={{width:'100%'}}>
                            Ingresar
                        </Button>
                    </NavLink>
                </Grid>
                <Grid item xs={12}>
                    <Typography 
                        variant='subtitle2'
                        component='div'
                    >
                        <NavLink to='/forgotpass' style={{color:'black'}}>
                            Olvide mi contraseña
                        </NavLink>
                    </Typography>
                </Grid>
            </Grid>
        </form>
    )
}



const Login = () => {
    return (
        <Container maxWidth='xl'>
            <Grid container justifyContent='center' alignItems='center'sx={{height:'100vh'}}>
                <Box sx={{maxWidth:600, width:'100%'}}>
                    <Grid container direction='column' justifyContent='center' alignItems='center'>
                        <FormLogin />
                    </Grid>
                </Box>
            </Grid>
        </Container>
    )
};

export default Login;
