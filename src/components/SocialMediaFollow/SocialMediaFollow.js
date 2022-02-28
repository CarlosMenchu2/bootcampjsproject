import React from 'react';

//Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { socialMedia } from '../../utils/socialMediaImages';
import Divider from '@mui/material/Divider';

export const SocialMediaFollow = ({socialMediaName, image}) => {
    
    const socialMediaFind = socialMedia.find(social => social.socialMediaName == socialMediaName );

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image={image}
            alt={socialMediaFind.socialMediaName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                    Seguidores
                </Typography>
                <Divider />
                <Typography variant="h5" color="text.secondary" textAlign="center">
                    10k
                </Typography>
            </CardContent>
        </Card>
    )
}
