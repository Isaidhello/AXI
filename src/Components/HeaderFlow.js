import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'grid',
  },
  item: {
    minHeight: 'auto',
    alignItems: 'flex-start',
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    marginLeft: '-10px'
  },
  text: {
    flexGrow: 1,
    fontWeight: "bold",
    paddingTop: "10px",
  },
  arrowBackIcon: {
    color: "#ffffff",
    fontSize: "60px",
    marginTop: "1%",
  },
  appBar: {
    height: '7vh',
    paddingBottom: '10px'
  },
  margin: {
    marginTop: "0%"
  }
}));

export default function HeaderFlow() {
  const classes = useStyles();

  return (
    /* Deze header vervangt de home header zodra een gebuiker in een flow gaat */
    <div className={classes.root}>
      <AppBar color="primary" position="static" className={classes.appBar}>
        <Grid container className={classes.margin}> <Link to="/axi/home" className={classes.arrowBackIcon} >
          <Grid item xs={2}>
            <ArrowBackIcon className={classes.arrowBackIcon} style={{paddingLeft: '15px', paddingTop: '9px'}} />
          </Grid></Link>

          <Grid item xs={10} className={classes.item}>
            <Typography align="center" variant="h4" className={classes.text} gutterBottom>
              Bestellen
           <Typography align="center" variant="h6">
                Overzicht
          </Typography>
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}