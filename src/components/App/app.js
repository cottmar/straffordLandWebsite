import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header/header';
import Landing from '../../components/landing/landing';
import Footer from '../Footer/footer';
import Info from '../Info/info';
import '../../style/main.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Header/>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/info' component={Info}/>
      <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;