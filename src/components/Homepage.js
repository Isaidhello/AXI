import React from 'react';
import '../Homescreen.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SearchBar from "material-ui-search-bar";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  homescreen: {
    width: '100vw',
    height: '100vh',
    background: "linear-gradient(135deg, rgba(29,95,192,1) 0%, rgba(28,90,198,1) 100%);"
  },
  root: {
    flexGrow: 1,
  },
  appBar: {
    height: '8%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#4688D7",
    height: "100%",
    top: "15%"
  },
  title: {
    flexGrow: 1,
    color: "#767676"
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
    height: "340px",
  },
  cardsContainer: {
    marginLeft: "5px",
    marginRight: "5px",
    marginTop: '0.5ch'
  },
  searchBar: {
    marginBottom: "10px",
    height: "150px"
  },
  settingsContainer: {
    height: "100%"
  },
  link: {
    textDecoration:'none'
  }
}));

const Homepage = () => {

      const classes = useStyles();

      return( 
      <Grid container alignItems="flex-start" className={classes.homescreen}>
      <Grid container justify="center" spacing={3} className={classes.cardsContainer}>
        <Grid item >
          <SearchBar
            placeholder='Scan of zoek hier een product'
            style={{
              width: 650,
              height: 60,
            }}
          />
        </Grid>

        <Grid item xs={6} >
          <Link to="/bestellen" className={classes.link}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Bestellen
                </Typography>
                <Typography variant="h5" component="h2">
                  Bestellen
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Link to="/schaplabel" className={classes.link}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Schaplabel
                </Typography>
                <Typography variant="h5" component="h2">
                  Schaplabel
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Link to="/voorraad" className={classes.link}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Voorraad
                </Typography>
                <Typography variant="h5" component="h2">
                  Voorraad
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Link to="/binnenkomend" className={classes.link}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Binnenkomend
                </Typography>
                <Typography variant="h5" component="h2">
                  Binnenkomend
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Link to="/afschrijven" className={classes.link}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Afschrijven
                </Typography>
                <Typography variant="h5" component="h2">
                  Afschrijven
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Link to="/afprijzen" className={classes.link}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Afprijzen
                </Typography>
                <Typography variant="h5" component="h2">
                  Afprijzen
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

      </Grid>
      </Grid>
      )}

export default Homepage;