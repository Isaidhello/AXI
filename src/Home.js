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
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EuroIcon from '@material-ui/icons/Euro';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import SearchBar from "material-ui-search-bar";
import Badge from '@material-ui/core/Badge';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormatBold } from '@material-ui/icons';

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
  buttonFont: {
    color: "#4688D7",
    fontWeight: "bold"
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
  knopFill:{
    width: '100%'
  }
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


        <Grid item xs={6}>
        <Badge badgeContent={4} color="error" className={classes.badgeWidth} >
          <Card className={classes.card} variant="outlined" className={classes.badgeWidth}>
            <CardContent>
            <Grid container item xs={12} justify="center">
              <Grid item>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              <br></br><br></br><br></br><br></br><ShoppingCartIcon className={classes.shoppingCartIcon} />
              </Typography>
              </Grid>
              </Grid>
              <Grid container item xs={12} justify="center">
              <Grid item>
              <Typography variant="h5" className={classes.buttonFont}>
                Bestellen
               </Typography>
               </Grid>
            </Grid>
            </CardContent>
          </Card>
          </Badge>
        </Grid>

        <Grid item xs={6}>
          <Card className={classes.card} variant="outlined">
            <CardContent>
            <Grid container item xs={12} justify="center">
              <Grid item>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              <br></br><br></br><br></br><br></br><ViewWeekIcon className={classes.viewWeekIcon} />
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
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className={classes.card} variant="outlined">
            <CardContent>
            <Grid container item xs={12} justify="center">
              <Grid item>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              <br></br><br></br><br></br><br></br><AssignmentIcon className={classes.assignmentIcon} />
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
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className={classes.card} variant="outlined">
            <CardContent>
            <Grid container item xs={12} justify="center">
              <Grid item>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              <br></br><br></br><br></br><br></br><LocalShippingIcon className={classes.localShippingIcon} />
              </Typography>
              </Grid>
              </Grid>
              <Grid container item xs={12} justify="center">
              <Grid item>
              <Typography variant="h5" className={classes.buttonFont}>
                Binnenkomend
               </Typography>
               </Grid>
            </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
        <Card className={classes.card} variant="outlined">
            <CardContent>
            <Grid container item xs={12} justify="center">
              <Grid item>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              <br></br><br></br><br></br><br></br><DeleteForeverIcon className={classes.deleteForeverIcon} />
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
          </Card>
        </Grid>

        <Grid item xs={6}>
        <Card className={classes.card} variant="outlined">
            <CardContent>
            <Grid container item xs={12} justify="center">
              <Grid item>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              <br></br><br></br><br></br><br></br><EuroIcon className={classes.euroIcon} />
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
          </Card>
        </Grid>

      </Grid>
    </Grid>
  );
}

export default Home;
