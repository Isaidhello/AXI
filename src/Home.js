import React from 'react';
import './Homescreen.css';
import { makeStyles } from '@material-ui/core/styles';


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
  }}
}));

function Home() {
  const classes = useStyles();
  return (

    
    <div className={classes.main}>
    <BrowserRouter>
        

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
