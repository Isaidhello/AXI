import React from 'react';
import '../Homescreen.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SettingsIcon from '@material-ui/icons/Settings';


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
    height: '10%',
    paddingBottom: '10px'
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

const Header = () => {

  const classes = useStyles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

      return( 
        <div>
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
        </div>
      )}

export default Header;