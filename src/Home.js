import React from 'react';
import './Homescreen.css';
import { makeStyles } from '@material-ui/core/styles';


import { BrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route}from 'react-router-dom';

import Afprijzen from './components/afprijzen/Afprijzen.js';
import Homepage from './components/Homepage.js';
import Header from './components/Header';

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
    

      {/* Appbar */}
      <Header />

      <BrowserRouter>
        <Router>
            <Switch>
              <Route exact path="/home" component={Homepage}>

              </Route>
              <Route exact path="/afprijzen" component={Afprijzen}>
                
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
