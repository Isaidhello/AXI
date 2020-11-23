import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
    paddingTop: theme.spacing(0),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar className={classes.item}>
          <Typography align="center" variant="h6" className={classes.text}>
            Bestellen
          </Typography>
        </Toolbar>
        <Toolbar className={classes.item}>
          <Typography align="center" variant="subtitle1" className={classes.text}>
            Overzicht
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}