import React, { Component } from 'react';
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
      author: 'Bob Dylan'
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
      <div id="app">
        <header>
          <h1>Edan's Harmonicas</h1>
        </header>

        <main>
          <Profile 
            name={this.state.profile.name} 
            location={this.state.profile.location} 
          />

          <HarmonicaList 
            harmonicas={this.state.harmonicas} 
            onDelete={this.onDelete}
          /> 

          <Quote 
            quote={this.state.quote.quote}
            author={this.state.quote.author}
          />
        </main>
      </div>
    );
  }
}

export default App;
