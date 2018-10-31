import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header/header';
import Landing from '../../components/landing/landing';
import Forty from '../40/forty';
import Info from '../Info/info';
import Footer from '../Footer/footer';
import SeventyFive from '../75/seventyFive';
import '../../style/main.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/info' component={Info}/>
          <Route exact path='/forty' component={Forty}/>
          <Route exact path='/seventyFive' component={SeventyFive}/>
          <Footer/>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;