import React, { Component } from 'react';
import Info from '../Info/info';
import Map from '../Map/map';
import Footer from '../Footer/footer';
import '../../index';

class App extends Component {
  render() {
    return (
      <div id="site">
      <div id="header">
          <div id="words">A C R E A G E&emsp;F O R&emsp;S A L E
          </div>
        </div>
          <div id="bold"> Strafford, Missouri
          </div>
          <Info />
          <Map/>
          <Footer/>
      </div>
    );
  }
}

export default App;