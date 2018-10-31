import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header/header';
import Landing from '../../components/landing/landing';
import Info from '../Info/info';
import Footer from '../Footer/footer';
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
          <Footer/>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;