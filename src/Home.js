import React from 'react';
import './Homescreen.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchBar from "material-ui-search-bar";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  homescreen: {
    width: '100vw',
    height: '100vh',
    background: "linear-gradient(135deg, rgba(29,95,192,1) 0%, rgba(28,90,198,1) 100%);",
  },
  root: {
    flexGrow: 1,
  },
  appBar: {
    height: '7%'
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
    height: "340px"
  },
  cardsContainer: {
    marginLeft: "5px",
    marginRight: "5px"
  },
  searchBar: {
    marginBottom: "10px",
    height: "150px"
  },
  settingsContainer: {
    height: "100%"
  },
}));

function Home() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    // Gehele homescreen container
    <Grid container alignItems="flex-start" className={classes.homescreen}>

      {/* Appbar */}
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon className={classes.menuIcon} />
          </IconButton>

          {/* Titel bedrijf, werkenemer en functie */}
          <Grid container justify="center" direction="column" spacing={2}>
            <Grid container item xs={12} justify="center">
              <Grid item>
                <Typography variant="h4" className={classes.title}>
                  Dille & Kamille
          </Typography>
              </Grid>
            </Grid>

            {/* Naam en functie gedeelte */}
            <Grid container direction="row">

              <Grid item container justify="center" xs={6}>
                <Grid item>
                  <Typography variant="h6" className={classes.subTitle}>
                    Stephanie van der Bie
                </Typography>
                </Grid>
              </Grid>

              <Grid item container justify="center" xs={6}>
                <Grid item>
                  <Typography variant="h6" className={classes.subTitle}>
                    Verkoop medewerkster
                </Typography>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {/* Work in progress menu en settings icon verdelen in grid items/containers */}
                <Grid container alignItems="center" className={classes.settingsContainer}>
                  <Grid item>
                    <SettingsIcon className={classes.settingsIcon} />
                  </Grid>
                </Grid>

              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      {/* Cards en searchbar container */}
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
        </Grid>

        <Grid item xs={6}>
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
        </Grid>

        <Grid item xs={6}>
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
        </Grid>

        <Grid item xs={6}>
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
        </Grid>

        <Grid item xs={6}>
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
        </Grid>

        <Grid item xs={6}>
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
        </Grid>

      </Grid>
    </Grid>
  );
}

export default Home;
