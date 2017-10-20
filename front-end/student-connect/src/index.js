import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './styles/index.css';
import App from './containers/App';
// import rootReducer from './reducers/reducer'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import store from './store'

ReactDOM.render(
<Provider store={store}><App /></Provider>,
  document.getElementById('root'));
registerServiceWorker();
