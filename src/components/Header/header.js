import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Forty from '../40/forty';
import SeventyFive from '../75/seventyFive';
import Info from '../Info/info';
import '../Header/header.css';

class Header extends Component {
  render() {
    return (
    <div id="header">
      <div id="words">A C R E A G E&emsp;F O R&emsp;S A L E
      </div>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
          {/* <Route path="/info" component={Info}/> */}
        </li>
        <li>
          <Link to="/Forty">Forty Acres</Link>
          {/* <Route path="/Forty" component={Forty}/> */}
        </li>
        <li>
          <Link to="/SeventyFive">Seventy Five Acres</Link>
          {/* <Route path="/SeventyFive" component={SeventyFive}/> */}
        </li>
        </nav>
    </div>
    )
  }
}

export default Header;