import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const MuiCard = props => {
    const {name, date_local, links} = props.rowData
    return (
        <Paper elevation={3} style ={{width:"100%", height:"350px"}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={links?.patch?.small}
                    alt="Alon Musk"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {date_local}
                    </Typography>
                </CardContent>
            </Card>
        </Paper>
      );
}

export default MuiCard