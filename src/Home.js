import React from 'react';
import './Homescreen.css';
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


import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link }from 'react-router-dom';

import Afprijzen from './components/afprijzen/Afprijzen.js';
import Homepage from './components/Homepage.js';
import Header from './components/Header';
import ProductList from './components/afprijzen/swipeable/BasicExample';
import FABRechtsOnder from './components/afprijzen/FABRechtsOnder';
import CardsHomeKlein from './components/afprijzen/CardsHomeKlein';
import ProductInfo from './components/afprijzen/ProductInfo';

const useStyles = makeStyles((theme) => ({
  homescreen: {
    width: '100vw',
    height: '100vh',
    background: "linear-gradient(135deg, rgba(29,95,192,1) 0%, rgba(28,90,198,1) 100%);",
  },
  root: {
    flexGrow: 1,
    background: "linear-gradient(135deg, rgba(29,95,192,1) 0%, rgba(28,90,198,1) 100%);"
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
  content: {
    marginTop: "30%",
  main: {
    background: "linear-gradient(135deg, rgba(29,95,192,1) 0%, rgba(28,90,198,1) 100%);",
    width: '100vw',
    height: '100vh'
  }
}));

function Home() {
  const classes = useStyles();
  return (

    
    <div className={classes.main}>
    <BrowserRouter>

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
          <Badge badgeContent={4} color="error" className={classes.badgeWidth} >
            <Card className={classes.card} variant="outlined">
              <CardContent className={classes.content}>
                <Grid container item xs={12} justify="center" alignItems="center">
                  <Grid item>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      <ShoppingCartIcon className={classes.shoppingCartIcon} />
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
          <Badge badgeContent={4} color="error"  >
            <Card className={classes.card} variant="outlined">
              <CardContent className={classes.content}>
                <Grid container item xs={12} justify="center">
                  <Grid item>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      <ViewWeekIcon className={classes.viewWeekIcon} />
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
          </Badge>
        </Grid>

        <Grid item xs={6}>
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
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
              <Grid container item xs={12} justify="center">
                <Grid item>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <LocalShippingIcon className={classes.localShippingIcon} />
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
          </Card>
        </Grid>

        <Grid item xs={6}>
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
          </Card>
        </Grid>

      </Grid>

      <Header />

        <Router>
            <Switch>
              <Route exact path="/home" component={Homepage}>

              </Route>
              <Route exact path="/afprijzen" component={Afprijzen}>
                
              </Route>
              <Route exact path="/afprijzen/korting1">
                <br></br><br></br><br></br><br></br><ProductList/>
                <Link to="/producttoevoegen">Simuleer een product scan</Link>
                <FABRechtsOnder />
              </Route>
              <Route exact path="/afprijzen/korting2">
                korting 2
              </Route>
              <Route exact path="/afprijzen/korting3">
                korting 3
              </Route>
              <Route exact path="/producttoevoegen">
                <ProductInfo />
                <CardsHomeKlein />
              </Route>
              <Route exact path="/bestellen" component="">
                <h1>Bestellen</h1>
              </Route>
              <Route exact path="/schaplabel" component="">
                <h1>Schaplabel</h1>
              </Route>
              <Route exact path="/voorraad" component="">
                <h1>Voorraad</h1>
              </Route>
              <Route exact path="/afschrijven" component="">
                <h1>Afschrijven</h1>
              </Route>
              <Route exact path="/binnenkomend" component="">
              <h1>Binnenkomend</h1>
              </Route>
            </Switch>
          </Router>
    

          </BrowserRouter>
    </div>
  );
}

export default Home;
