import React, { Component } from 'react';
import LoginPage from './components/LoginPage'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
            <BrowserRouter>
              <Switch>
                <Route path='/login' component={LoginPage} />
                <Redirect from="/" to="/login" />
              </Switch>
            </BrowserRouter>
          </div>  
      </div>
    );
  }
}

export default App;
