import React, { Component } from 'react';
// import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header/header';

// import Landing from '../../components/landing/landing';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div id='BrowserRoutes'>
      <Header/>
      
      </div> 
      </BrowserRouter>
    );
  }
}

export default App;