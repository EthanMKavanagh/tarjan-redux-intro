import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import profileReducer from './reducers/profile';
import harmonicasReducer from './reducers/harmonicas';
import quoteReducer from './reducers/quote';

const store = createStore(
  combineReducers({
    profile: profileReducer,
    harmonicas: harmonicasReducer,
    quote: quoteReducer
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

