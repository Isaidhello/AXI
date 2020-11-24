import React from 'react';
import './Homescreen.css';
import { makeStyles } from '@material-ui/core/styles';


import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link }from 'react-router-dom';

import Afprijzen from './components/afprijzen/Afprijzen.js';
import Homepage from './components/Homepage.js';
import Header from './components/Header';
import FABRechtsOnder from './components/afprijzen/FABRechtsOnder';
import CardsHomeKlein from './components/afprijzen/CardsHomeKlein';
import ProductInfo from './components/afprijzen/ProductInfo';
import OwnSearchBar from './components/SearchBar';
import StandardList from './components/afprijzen/StandardList';

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  }
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
                <OwnSearchBar style={{marginLeft: '-5px'}}/>
                <br></br><br></br><br></br>
                <StandardList />
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
