import React, { Component } from 'react';
import Info from '../Info/info';
import Map from '../Map/map';
import Footer from '../Footer/footer';
import Header from '../Header/header';
// import Forty from '../40/forty';
// import SeventyFive from '../75/seventyFive';

class App extends Component {
  render() {
    return (
      <div id="site">
          <Header/>
          {/* <Forty/> */}
          {/* <SeventyFive/> */}
          <Info />
          <Map/>
          <Footer/>
      </div>
    );
  }
}

export default App;