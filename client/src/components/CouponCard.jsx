import React from 'react';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CouponCard = ({discount,description})=>{
    return (
        <Card sx={{ maxWidth: 200, minHeight:300 }} variant='outlined'>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   {discount}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
    )
};

export default CouponCard;