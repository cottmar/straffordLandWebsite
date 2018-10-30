import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App/app';
import registerServiceWorker from './src/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root', 'containerCarousel'));
registerServiceWorker();
