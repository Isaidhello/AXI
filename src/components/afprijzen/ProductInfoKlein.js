import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Verf from '../../images/vogel.png'; 




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      
      margin: theme.spacing(1),
      width:'96%',
      marginBottom: '0',
      marginTop: '0'
    },

    afb:{
         
        
    }

    
    
  },
}));

export default function ProductInfoKlein() {
  const classes = useStyles();

  return (
    <Grid 
    container
    className={classes.root}
    direction="column"
    justify="center"
    alignItems="center"
    style={{marginBottom: 50, backgroundColor: 'white', marginTop: '-1px', paddingBottom: '50px'}}
    //spacing={3}
    //style={{ margin: 8 }}
    >
        <Grid 
        item 
        container
        justify="center"
        alignItems="center"
        xs={12} 
         > 
        <img id="ProductImg" style={{height: 200, marginBottom: 30, marginTop: 50}} src={Verf} alt='Foto van Flexa verf'></img>
        </Grid>
        <br></br>

        <Grid 
        item 
        container
        justify="center"
        alignItems="center"
        xs={12} //Titeltext
         > 
         <Typography id="ProductTitel" variant="h5" style={{fontWeight: "bold" }}>Flexa Creations muurverf early dew 1L </Typography> 
        </Grid><br></br><br></br>
        
        <Grid 
        container 
        item
        direction="row"
        justify="space-around"
        alignItems="center"
        xs={12}>
           
            <Grid 
            item 
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            xs={2}> 
                <Grid item xs={12}>
                    <Typography  variant="h6" style={{fontWeight: "bold" }} >Voorraad:</Typography>
                </Grid>
                <Grid item>
                    <Typography id="ProductVoorraad" variant="h6">21 Stuks</Typography>
                </Grid>   
             </Grid>

             <Grid 
            item 
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            xs={2}> 
                <Grid item xs={12}>
                    <Typography variant="h6" style={{fontWeight: "bold" }}>Nummer:</Typography>
                </Grid>
                <Grid item>
                    <Typography id="ProductNummer" variant="h6">345678</Typography>
                </Grid>   
             </Grid>

             <Grid 
            item 
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            xs={2}> 
                <Grid item xs={12}>
                    <Typography variant="h6" style={{fontWeight: "bold" }}>Prijs:</Typography>
                </Grid>
                <Grid item>
                    <Typography id="ProductPrijs" variant="h6">24,99</Typography>
                </Grid>   
             </Grid>

             <Grid 
            item 
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            xs={2}> 
                <Grid item xs={12}>
                    <Typography variant="h6" style={{fontWeight: "bold" }}>Promotie:</Typography>
                </Grid>
                <Grid item>
                    <Typography id="ProductPromotie" variant="h6">Geen</Typography>
                </Grid>   
             </Grid>

             
            
            
         
        </Grid>
         
         
    </Grid>
  );
}