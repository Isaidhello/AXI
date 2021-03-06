import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EuroIcon from '@material-ui/icons/Euro';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  homescreen: {
    width: '100vw',
    height: '100vh'
  },
  root: {
    flexGrow: 1,
  },
  appBar: {
    height: '7%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#4688D7",
    height: "100%",
    top: "15%"
  },
  title: {
    flexGrow: 1,
    color: "#767676",
  },
  subTitle: {
    flexGrow: 1,
    color: "#767676",
  },
  settingsIcon: {
    color: "#4688D7",
    fontSize: "50px",
  },
  menuIcon: {
    fontSize: "40px",
  },
  card: {
    height: "25vh",
    width: "45vw"
  },
  cardsContainer: {
    marginLeft: "7px",
    marginRight: "5px",
    marginTop:"-40px"
  },
  settingsContainer: {
    height: "100%"
  },
  buttonFont: {
    color: "#4688D7",
    fontWeight: "bold",
    textDecoration: "none",
  },
  shoppingCartIcon: {
    color: "#4688D7",
    fontSize: "60px",
  },
  assignmentIcon: {
    color: "#4688D7",
    fontSize: "60px",
  },
  localShippingIcon: {
    color: "#4688D7",
    fontSize: "60px",
  },
  deleteForeverIcon: {
    color: "#4688D7",
    fontSize: "60px",
  },
  euroIcon: {
    color: "#4688D7",
    fontSize: "60px",
  },
  viewWeekIcon: {
    color: "#4688D7",
    fontSize: "60px",
  },
  badgeWidth: {
    width: '100%'
  },
  content: {
    marginTop: "30%",
  main: {
    width: '100vw',
    height: '100vh'
  }}
}));

const ProductInfoBlokken = () => {

      const classes = useStyles();

      return( 
      <Grid container alignItems="flex-start" className={classes.homescreen}>
      <Grid container justify="center" spacing={3} className={classes.cardsContainer}>

        <Grid item xs={6}><Link to="/voorraad" style={{textDecoration: "none"}}>
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
              <Grid container item xs={12} justify="center">
                <Grid item>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <AssignmentIcon className={classes.assignmentIcon} />
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} justify="center">
                <Grid item>
                  <Typography variant="h5" className={classes.buttonFont}>
                    Voorraad
               </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card></Link>
        </Grid>

        <Grid item xs={6}><Link to="/schaplabel" style={{textDecoration: "none"}}>
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
              <Grid container item xs={12} justify="center">
                <Grid item>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <ViewWeekIcon className={classes.localShippingIcon} />
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} justify="center">
                <Grid item>
                  <Typography variant="h5" className={classes.buttonFont}>
                    Schaplabel
               </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card></Link>
        </Grid>

        <Grid item xs={6}><Link to="/afschrijven" style={{textDecoration: "none"}}>
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
              <Grid container item xs={12} justify="center">
                <Grid item>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <DeleteForeverIcon className={classes.deleteForeverIcon} />
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} justify="center">
                <Grid item>
                  <Typography variant="h5" className={classes.buttonFont}>
                    Afschrijven
               </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card></Link>
        </Grid>

        <Grid item xs={6}><Link to="/afprijzen" style={{textDecoration: "none"}}>
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
              <Grid container item xs={12} justify="center">
                <Grid item>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <EuroIcon className={classes.euroIcon} />
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} justify="center">
                <Grid item>
                  <Typography variant="h5" className={classes.buttonFont}>
                    Afprijzen
               </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card></Link>
        </Grid>

      </Grid>
      </Grid>
      )}

export default ProductInfoBlokken;