import React from 'react';
// import { Route } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
// import Info from '../Info/info';
// import Map from '../Map/map';
// import Footer from '../Footer/footer';
import Header from '../Header/header';
import Forty from '../40/forty';
import SeventyFive from '../75/seventyFive';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Header/>
      <Route exact path='/' component={App}/>
      <Route exact path='/forty' component={Forty}/>
      <Route exact path='/seventyFive' component={SeventyFive}/>
      </BrowserRouter>
    );
  }
}

export default App;