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
import { checkLoggedIn } from './actions/authActions'
import { bindActionCreators } from 'redux'

class App extends Component {
  render() {
    this.props.checkLoggedIn();
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
  isLoggedIn: state.auth.isLoggedIn
})

const mapDispatchToProps = dispatch => bindActionCreators({checkLoggedIn},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(App)

