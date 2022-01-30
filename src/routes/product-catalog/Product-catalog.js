import React from 'react'

import Box from '@mui/material/Box'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import ListItemText from '@mui/material/ListItemText'
import { Container, FormControl, Grid, Typography } from '@mui/material';
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

//import { FooterComponent } from '../../components/footer/footer-component';
import { CardComponent } from '../../components/card/card-component';

const drawerWidth = 770;

export const ProductCatalog = () => {
    return (
        <>
        <Container maxWidth='xl' sx={{mt:5}}>
            <Grid container>
                <Grid item xs={12} md={2}>
                    <Box className='drawer'>
                        <Box sx={{overflow:'auto'}}>
                            <Typography
                                variant='h6'
                                component='div'
                            >
                                Categorias
                            </Typography>
                            {/* <List>
                                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                ))}
                            </List> */}
                            <FormControl>
                                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                    <FormControlLabel key={index} control={<Checkbox color='button' />} label={text}/>
                                ))}
                            </FormControl>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={10}>
                    <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                        {[1,2,3,4,5].map(item =>{ 
                        
                        return <Grid container justifyContent='space-between' wrap='wrap' sx={{mt:4}}>
                                    <Grid item md={4} xs={12}>
                                        <CardComponent />
                                    </Grid>
                                    <Grid item md={4} xs={12}>
                                        <CardComponent />
                                    </Grid>
                                    <Grid item md={4} xs={12}>
                                        <CardComponent />
                                    </Grid>
                                </Grid>
                        
                        })}
                        
                    </Box>
                </Grid>
            </Grid>
        </Container>
        {/* <FooterComponent /> */}
        </>
        

    )
}