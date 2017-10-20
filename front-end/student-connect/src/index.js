import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './styles/index.css';
import App from './containers/App';
import rootReducer from './reducers/reducer'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <Provider store={store}> //define store in index.js file in the store folder index.js file
  <App />
</Provider>,
  document.getElementById('root'));
registerServiceWorker();
