import React from 'react';
import './Homescreen.css';
import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Afprijzen from './Components/afprijzen/Afprijzen.js';
import Homepage from './Components/Homepage.js';
import Header from './Components/Header';
import HeaderFlow from './Components/HeaderFlow';
import FABRechtsOnder from './Components/afprijzen/FABRechtsOnder';
import CardsHomeKlein from './Components/afprijzen/CardsHomeKlein';
import ProductInfo from './Components/afprijzen/ProductInfo';
import OwnSearchBar from './Components/SearchBar';
import OwnSearchBarDrop from './Components/afprijzen/SearchBarDrop';
import StandardList from './Components/afprijzen/StandardList';
import ListBestellen from './Components/bestellen/ListBestellen';
import ListBestellen1 from './Components/bestellen/ListBestellen1';
import ListBestellen2 from './Components/bestellen/ListBestellen2';
import ListBestellen3 from './Components/bestellen/ListBestellen3';

import ProductInfoBlokken from './Components/afprijzen/ProductInfoBlokken';
import ProductInfoKlein from './Components/afprijzen/ProductInfoKlein';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  },
  root: {
    height: '100vh',
    backgroundColor: 'white'
  }
}));

function Home() {
  const classes = useStyles();
  return (


    <div className={classes.main}>
      <BrowserRouter>
        <Router>
          <Switch>
          <Route exact path="/axi/">
              <Redirect to='/axi/home'/>
            </Route>
            <Route exact path="/axi/home" component={Homepage}>
              <Header />
              <Homepage />

            </Route>
            <Route exact path="/axi/afprijzen" component={Afprijzen}>
              
            </Route>
            <Route exact path="/axi/afprijzen/korting1">
              <OwnSearchBarDrop />
              <br></br><br></br><br></br>
              <StandardList />
              <Link to="/axi/producttoevoegen">Simuleer een product scan</Link>
              <FABRechtsOnder />
            </Route>
            <Route exact path="/axi/afprijzen/korting2">
              korting 2
            </Route>
            <Route exact path="/axi/afprijzen/korting3">
              korting 3
            </Route>
            <Route exact path="/axi/producttoevoegen">
              <ProductInfo />
              <CardsHomeKlein />
            </Route>
            <Route exact path="/axi/productinfo">
              <ProductInfoKlein />
              <ProductInfoBlokken />
            </Route>

              <Route exact path="/axi/bestellen">
                <HeaderFlow />
                <OwnSearchBar style={{marginLeft: '-5px'}}/>
                <br></br><br></br><br></br>
                <ListBestellen />
                <FABRechtsOnder />
              </Route>

              <Route exact path="/axi/bestellen1">
                <HeaderFlow />
                <OwnSearchBar style={{marginLeft: '-5px'}}/>
                <br></br><br></br><br></br>
                <ListBestellen1 />
                <FABRechtsOnder />
              </Route>

              <Route exact path="/axi/bestellen2">
                <HeaderFlow />
                <OwnSearchBar style={{marginLeft: '-5px'}}/>
                <br></br><br></br><br></br>
                <ListBestellen2 />
                <FABRechtsOnder />
              </Route>

              <Route exact path="/axi/bestellen3">
                <HeaderFlow />
                <OwnSearchBar style={{marginLeft: '-5px'}}/>
                <br></br><br></br><br></br>
                <ListBestellen3 />
                <FABRechtsOnder />
              </Route>



            <Route exact path="/axi/schaplabel" component="">
              <h1>Schaplabel</h1>
            </Route>
            <Route exact path="/axi/voorraad" component="">
              <h1>Voorraad</h1>
            </Route>
            <Route exact path="/axi/afschrijven" component="">
              <h1>Afschrijven</h1>
            </Route>
            <Route exact path="/axi/producttoevoegen">
              <ProductInfo />
              <CardsHomeKlein />
            </Route>
            <Route exact path="/axi/bestellen" component="">
              <h1>Bestellen</h1>
            </Route>
            <Route exact path="/axi/schaplabel" component="">
              <h1>Schaplabel</h1>
            </Route>
            <Route exact path="/axi/voorraad" component="">
              <h1>Voorraad</h1>
            </Route>
            <Route exact path="/axi/afschrijven" component="">
              <h1>Afschrijven</h1>
            </Route>
            <Route exact path="/axi/binnenkomend" component="">
              <h1>Binnenkomend</h1>
            </Route>
          </Switch>
        </Router>


      </BrowserRouter>
    </div>
  );
}

export default Home;
