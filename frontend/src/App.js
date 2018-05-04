import React, { Component } from 'react';
import LoginPage from './components/LoginPage'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
              <LoginPage />
          </div>  
      </div>
    );
  }
}

export default App;
