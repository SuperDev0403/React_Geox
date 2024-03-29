// https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md
import App from 'app';
import axios from 'axios';
import React from 'react';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL = 'https://geox-dusk-44627.herokuapp.com/api';
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
