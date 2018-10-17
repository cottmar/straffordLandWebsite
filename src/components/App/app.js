import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import Info from '../Info/info';
import Map from '../Map/map';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Forty from '../40/forty';
import SeventyFive from '../75/seventyFive';

class App extends Component {
  render() {
    return (
      <Router>
      <div id='navBar'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Forty">Forty Acres</Link>
        </li>
        <li>
          <Link to="/SeventyFive">Seventy Five Acres</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/Forty" component={Forty}/>
      <Route path="/SeventyFive" component={SeventyFive}/>
          <Header/>
          <Info />
          <Map/>
          <Footer/>
      </div> 
      </Router>
    );
    
    const Home = () => {
      <div>
        <h2>Home</h2>
      </div>
    }

    const Forty = () => {
      <div>
        <h2> <Forty/></h2>
      </div>
    }

    const SeventyFive = () => {
      <div>
        <h2><SeventyFive/></h2>
      </div>
    }
  }
}

export default App;