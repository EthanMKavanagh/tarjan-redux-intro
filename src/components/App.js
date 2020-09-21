import React, { Component } from 'react';
import Profile from './Profile';
import HarmonicaList from './HarmonicaList';
import Quote from './Quote';

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
      {brand: 'Hohner', keyOf: 'C'},
      {brand: 'Suzuki', keyOf: 'G'},
      {brand: 'Lee Oskar', keyOf: 'Am(H)'}
    ],
    quote: {
      quote: `The harmonica is the world's best selling instrument. You're welcome.`,
      author: 'Bob Dylan'
    }
  }

  onDelete = (harmonicaToDelete) => {
    // Create a new array of harmonicas, excluding the one to delete
    let nextHarmonicas = this.state.harmonicas
      .filter(harmonica => {
        return harmonica.brand !== harmonicaToDelete.brand ||
          harmonica.keyof !== harmonicaToDelete.keyof;
      });

    // Update state with new list of harmonicas
    this.setState({
      harmonicas: nextHarmonicas
    });
  }

  render() {
    return (
      <div>
        <h1>Edan's Harmonicas</h1>

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
      </div>
    );
  }
}

export default App;
