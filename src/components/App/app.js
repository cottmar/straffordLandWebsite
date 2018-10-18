import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import Info from '../Info/info';
import Map from '../Map/map';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Forty from '../40/forty';
import SeventyFive from '../75/seventyFive';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div id='navBar'>
      <Header/>
      <ul>
        <li>
          <Link to="/">Home</Link>
      {/* <Route exact path="/" component={Home} /> */}
        </li>
        <li>
          <Link to="/Forty">Forty Acres</Link>
          <Route path="/Forty" component={Forty}/>
        </li>
        <li>
          <Link to="/SeventyFive">Seventy Five Acres</Link>
          <Route path="/SeventyFive" component={SeventyFive}/>
        </li>
      </ul>
          <Info />
          <Map/>
          <Footer/>
      </div> 
      </BrowserRouter>
    );
  }
}

export default App;