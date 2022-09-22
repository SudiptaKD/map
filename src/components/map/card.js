import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { CardActionArea, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';



export default function MapCard({data}) {
  return (
    <Card sx={{ minWidth: 301 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Typography gutterBottom variant="h6" component="div">
                        {data.name}
                    </Typography>
                </Grid>
                <Grid item xs={2} sx={{mt:.5}}>
                    <InfoOutlinedIcon/>
                </Grid>
            </Grid>
          
            <Grid container spacing={4} sx={{color:"#6F6F6F"}} >
                <Grid item xs={1}>
                    <PinDropOutlinedIcon />
                </Grid>
                <Grid item xs={6} sx={{mt:.2, fontSize:"18px"}}>
                    {data.location}
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
            <Grid container spacing={4} sx={{color:"#6F6F6F"}}>
                <Grid item xs={1}>
                    <VisibilityOutlinedIcon/>
                </Grid>
                <Grid item xs={6} sx={{mt:.5}}>
                    {data.visited} people visited
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
