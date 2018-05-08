import React, { Component } from 'react';
import LoginPage from './components/LoginPage'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import PageNotFound from './components/PageNotFound'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
            <BrowserRouter>
              <Switch>
                <Route exact path='/login' component={LoginPage} />
                <Redirect from="/" to="/login" />
                <Route component={PageNotFound} />
              </Switch>
            </BrowserRouter>
          </div>  
      </div>
    );
  }
}

export default App;
