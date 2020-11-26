import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  },
  text: {
    flexGrow: 1,
    fontWeight: "bold",
    paddingTop: "10px",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Grid item className={classes.item}>
          <ArrowBackIcon />
          <Typography align="center" variant="h6" className={classes.text} gutterBottom>
            Bestellen
          </Typography>
        </Grid>
        <Grid item className={classes.item}>
          <Typography align="center" variant="subtitle1">
            Overzicht
          </Typography>
        </Grid>
      </AppBar>
    </div>
  );
}