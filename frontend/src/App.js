import React, { Component } from 'react';
import LoginPage from './components/LoginPage'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { connect } from 'react-redux'
import PageNotFound from './components/PageNotFound'
import Dashboard from './components/dashboard/Dashboard'

class App extends Component {
  render() {
    if (this.props.isLoggedIn === false) {
      return (
              <BrowserRouter>
                <Switch>
                  <Route exact={true} path='/' component={LoginPage} />
                  <Route component={PageNotFound} />
                </Switch>
              </BrowserRouter>
      );
    }

    return <Dashboard />


  }
}

const mapStateToProps = state => ({
  userData: state.auth.userData,
  failed: state.auth.failed,
  isLoggedIn: state.auth.isLoggedIn
})
export default connect(mapStateToProps)(App)

