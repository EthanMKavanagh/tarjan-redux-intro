import React, {Component} from 'react';
import HarmonicaItem from './HarmonicaItem';

class HarmonicaList extends Component {
  render() {
    return (
      <div>
        <h3>My Harmonicas!</h3>
        <ul>
          {this.props.harmonicas.map((harmonica, i) => 
            <HarmonicaItem 
              brand={harmonica.brand} 
              keyOf={harmonica.keyOf}
              key={i}
              onDelete={this.props.onDelete}
            />
          )}
        </ul>
      </div>
    );
  }
} 

export default HarmonicaList;