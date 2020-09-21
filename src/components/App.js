import React, { Component } from 'react';
import {Route, Link, HashRouter as Router} from 'react-router-dom';
import Profile from './Profile';
import HarmonicaList from './HarmonicaList';
import Quote from './Quote';
import './App.css';

class App extends Component {

  state = {
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

  onDelete = (harmonicaId) => {
    // Create a new array of harmonicas, 
    // excluding the one to delete
    let nextHarmonicas = this.state.harmonicas
      .filter(harmonica => harmonica.id !== harmonicaId);

    // Update state with new list of harmonicas
    this.setState({
      harmonicas: nextHarmonicas
    });
  }

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
              <Profile 
                name={this.state.profile.name} 
                location={this.state.profile.location} 
              />
            </Route>

            <Route path="/harmonicas" exact>
              <HarmonicaList 
                harmonicas={this.state.harmonicas} 
                onDelete={this.onDelete}
              /> 
            </Route>

            <Route path="/quotes" exact>
              <Quote 
                quote={this.state.quote.quote}
                author={this.state.quote.author}
                image={this.state.quote.image}
              />
            </Route>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
