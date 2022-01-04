import React from 'react'
//Material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Static Files
import m1 from '../../assets/img/m1.jpg';

export const CardComponent = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="auto"
                image={m1}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Camiseta blanca
                </Typography>
                <Grid container justifyContent='end'>
                    <Grid item sx={12}>
                        <Typography variant="body2" color="text.secondary">
                            Q 50.00    
                        </Typography>
                    </Grid>
                </Grid>                
            </CardContent>
        </Card>
    )
}
