import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

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
    paddingTop: theme.spacing(1),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">

        {/* Container voor titel en subtitle van flow */}
        <Grid container >
          <Grid container item xs={12} alignItems="center">
            <Typography align="center" variant="h6" gutterBottom className={classes.text}>
              Artikelen bestellen
            </Typography>
          </Grid>

          <Grid item container xs={12} alignItems="center" justify="center">
            <Typography align="center" variant="subtitle1" >
              Overzicht
            </Typography>
          </Grid>

        </Grid>
      </AppBar>
    </div>
  );
}