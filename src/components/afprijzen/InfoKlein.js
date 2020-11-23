import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import zeep from '../../images/zeep.jpg';

const useStyles = makeStyles({
    container: {
        display: 'grid',
        minWidth: 275,
        gridTemplateColumns: 'auto auto',
        borderRadius: '0%',
        height: '450px'
    },
    image: {
        height: '18vh',
    },
    item: {
        justifySelf: 'center',
        alignSelf: 'center',
    },
});

export default function InfoKlein() {
    const classes = useStyles();

    return (
        <Card className={classes.container}>
            <CardMedia className={classes.item}>
                <img className={classes.image} src={zeep} alt="Zeep" />
            </CardMedia>
            <div className={classes.content}>
                <CardContent>
                    <Typography className={classes.title} variant="h6" gutterBottom>
                        Zeep Aloe Vera
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" >
                        <b>EAN:</b> 371287239
                        <br />
                        <b>Prijs:</b> €3,99
                        <br />
                        <b>Voorraad:</b> 3 st
                    </Typography>
                </CardContent>
            </div>
        </Card>
    )
}