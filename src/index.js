import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';


const initialProfile = {
    name: 'Edan',
    location: {
      city: 'Minneapolis',
      state: 'MN',
    }
}
const profileReducer = (state = initialProfile, action) => {
  if (action.type === 'SET_CITY') {
    return {
      ...state,
      location: {
        ...state.location,
        city: action.payload
      }
    }
  }

  if (action.type === 'SET_STATE') {
    return {
      ...state,
      location: {
        ...state.location,
        state: action.payload
      }
    }
  }

  return state;
}

const initialHarmonicas = [
  {id: 1, brand: 'Hohner', keyOf: 'C'},
  {id: 2, brand: 'Suzuki', keyOf: 'G'},
  {id: 3, brand: 'Lee Oskar', keyOf: 'Am(H)'}
];
const harmonicasReducer = (state = initialHarmonicas, action) => {
  return state;
}

const initialQuote = {
  quote: `The harmonica is the world's best selling instrument. You're welcome.`,
  author: 'Bob Dylan',
  image: 'https://www.si.edu/sites/default/files/newsdesk/press_releases/dylan_thumbnail.png'
}
const quoteReducer = (state = initialQuote, action) => {
  return state;
}

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

