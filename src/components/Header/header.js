import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
    <div id="header">
      <div id="words">A C R E A G E&emsp;F O R&emsp;S A L E
      </div>
    <nav>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/forty'>Forty</Link></li>
          <li><Link to='/projects'>Seventy Five</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
    </nav>
    </div>
    )
  }
}

export default Header;