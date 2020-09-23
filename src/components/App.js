import React, { Component } from 'react';
import {Route, Link, HashRouter as Router} from 'react-router-dom';
import Profile from './Profile';
import HarmonicaList from './HarmonicaList';
import Quote from './Quote';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
          <header>
            <h1>Edan's Harmonicas</h1>
          </header>

          <nav>
            <main>
              <ul>
                <li><Link to="/">Profile</Link></li>
                <li><Link to="/harmonicas">Harmonicas</Link></li>
                <li><Link to="/quotes">Quotes</Link></li>
              </ul>
            </main>
          </nav>

          <main>
            <Route path="/" exact>
              <Profile />
            </Route>

            <Route path="/harmonicas" exact>
              <HarmonicaList /> 
            </Route>

            <Route path="/quotes" exact>
              <Quote />
            </Route>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
