import React, { Component } from 'react';
import { Router, Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Info from '../Info/info';
import Map from '../Map/map';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Forty from '../40/forty';
import SeventyFive from '../75/seventyFive';
import Landing from '../../components/landing/landing';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div id='BrowserRoutes'>
      <Header/>
      <ul>
        <li>
          {/* <Link to="/">Home</Link> */}
        </li>
        <li>
          {/* <Link to="/Forty">Forty Acres</Link> */}
          <Route path="/Forty" component={Forty}/  >
        </li>
        <li>
          {/* <Link to="/SeventyFive">Seventy Five Acres</Link> */}
          <Route path="/SeventyFive" component={SeventyFive}/>
        </li>
      </ul>
      {/* <Route exact path="/" component={Home} /> */}
          <Info />
          <Landing/>
          <Map/>
          <Footer/>
      </div> 
      </BrowserRouter>
    );
  }
}

export default App;