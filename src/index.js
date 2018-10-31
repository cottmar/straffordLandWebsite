import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';
// import Carousel from './components/Carousel/carousel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(
//   <Carousel/>, document.getElementById('container')
// );