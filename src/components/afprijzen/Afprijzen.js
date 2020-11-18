import React from 'react';

import GradientList from './GradientList';

import { BrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route}from 'react-router-dom';

class Afprijzen extends React.Component {
    render() {
      return(
        <div>
          <GradientList />
          <BrowserRouter>
            <Router>
                <Switch>
                  <Route exact path="/afprijzen/korting1">
                    korting 1
                  </Route>
                  <Route exact path="/afprijzen/korting2">
                    korting 2
                  </Route>
                </Switch>
              </Router>
          </BrowserRouter>
        </div>

      );
    }
  }

export default Afprijzen;