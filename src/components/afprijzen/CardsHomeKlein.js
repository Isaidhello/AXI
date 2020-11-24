import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme)=>({
    root: {
        padding: theme.spacing(5),
        marginTop: '-10px',
        paddingTop: '0'
    },

    pos: {
      marginBottom: 12,
    },
    cardContent:{
        width: "100%",
    }
  }));

export default function CardsHomeKlein() {
    const classes = useStyles();
    

return (
    <Grid 
    className={classes.root}
    container
    color="primary"
    direction="row"
    justify="center"
    spacing={3}
    
    >
       <Grid container item xs={4} justify="center" >
            <Card className={classes.cardContent}>
                <Button className={classes.cardContent}>
                    <Link to="/vanvoorkorting" style={{textDecoration:'none', color: "#1D5FCA"}}>
                        <CardContent >
                            <Grid item>
                                <ShoppingCartIcon style={{fontSize: 100,}} color="primary"></ShoppingCartIcon>
                            </Grid>
                            <Grid item>
                                <Typography variant="h7" style={{fontWeight: "bold" }}>Van/Voor</Typography> 
                            </Grid>  
                        </CardContent>
                    </Link>               
                </Button>
            </Card>  
        </Grid>

        <Grid container item xs={4} justify="center" >
            <Card className={classes.cardContent}>
                <Button className={classes.cardContent}>
                    <Link to="/bedragkorting" style={{textDecoration:'none', color: "#1D5FCA"}}>
                        <CardContent >
                            <Grid item>
                                <ShoppingCartIcon style={{fontSize: 100,}} color="primary"></ShoppingCartIcon>
                            </Grid>
                            <Grid item>
                                <Typography variant="h7" style={{fontWeight: "bold" }}>Bedrag korting</Typography>
                            </Grid>  
                        </CardContent>
                    </Link>               
                </Button>
            </Card>  
        </Grid>

        <Grid container item xs={4} justify="center" >
            <Card className={classes.cardContent}>
                <Button className={classes.cardContent}>
                    <Link to="/percentagekorting" style={{textDecoration:'none', color: "#1D5FCA"}}>
                        <CardContent >
                            <Grid item>
                                <ShoppingCartIcon style={{fontSize: 100,}} color="primary"></ShoppingCartIcon>
                            </Grid>
                            <Grid item>
                                <Typography variant="h7" style={{fontWeight: "bold" }}>Percentage</Typography>
                            </Grid>  
                        </CardContent>
                    </Link>               
                </Button>
            </Card>  
        </Grid>

        <Grid container item xs={4} justify="center" >
            <Card className={classes.cardContent}>
                <Button className={classes.cardContent}>
                    <Link to="/staffelkorting" style={{textDecoration:'none', color: "#1D5FCA"}}>
                        <CardContent >
                            <Grid item>
                                <ShoppingCartIcon style={{fontSize: 100,}} color="primary"></ShoppingCartIcon>
                            </Grid>
                            <Grid item>
                                <Typography variant="h7" style={{fontWeight: "bold" }}>Staffelkorting</Typography>
                            </Grid>  
                        </CardContent>
                    </Link>               
                </Button>
            </Card>  
        </Grid>

        <Grid container item xs={4} justify="center" >
            <Card className={classes.cardContent}>
                <Button className={classes.cardContent}>
                    <Link to="/x+1gratiskorting" style={{textDecoration:'none', color: "#1D5FCA"}}>
                        <CardContent >
                            <Grid item>
                                <ShoppingCartIcon style={{fontSize: 100,}} color="primary"></ShoppingCartIcon>
                            </Grid>
                            <Grid item>
                                <Typography variant="h7" style={{fontWeight: "bold" }}>X + 1 gratis</Typography>
                            </Grid>  
                        </CardContent>   
                    </Link>
                </Button>
            </Card>  
        </Grid>

        <Grid container item xs={4} justify="center" >
            <Card className={classes.cardContent}>
                <Button className={classes.cardContent}>
                    <Link to="xvoorykorting" style={{textDecoration:'none', color: "#1D5FCA"}}>
                        <CardContent >
                            <Grid item>
                                <ShoppingCartIcon style={{fontSize: 100,}} color="primary"></ShoppingCartIcon>
                            </Grid>
                            <Grid item>
                                <Typography variant="h7" style={{fontWeight: "bold" }}>X voor Y</Typography>
                            </Grid>  
                        </CardContent>   
                    </Link>
                </Button>
            </Card>  
        </Grid>
        
    </Grid>
  );
}