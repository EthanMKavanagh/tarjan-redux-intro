import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
    // The REDUCER() aka "state machine"
    (state, action) => {
      console.log( '[REDUCER] state is:', state);
      console.log('[REDUCER] action is:', action);

      if (action.type === 'SET_CITY') {
        return {
          ...state,
          profile: {
            ...state.profile,
            location: {
              ...state.profile.location,
              city: action.payload
            }
          }
        }
      }

      if (action.type === 'SET_STATE') {
        return {
          ...state,
          profile: {
            ...state.profile,
            location: {
              ...state.profile.location,
              state: action.payload
            }
          }
        }
      }

        return {
            profile: {
              name: 'Edan',
              location: {
                city: 'Minneapolis',
                state: 'MN',
              }
            },
            harmonicas: [
              {id: 1, brand: 'Hohner', keyOf: 'C'},
              {id: 2, brand: 'Suzuki', keyOf: 'G'},
              {id: 3, brand: 'Lee Oskar', keyOf: 'Am(H)'}
            ],
            quote: {
              quote: `The harmonica is the world's best selling instrument. You're welcome.`,
              author: 'Bob Dylan',
              image: 'https://www.si.edu/sites/default/files/newsdesk/press_releases/dylan_thumbnail.png'
            }
        }
    }
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

