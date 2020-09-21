import React, {Component} from 'react';

class HarmonicaItem extends Component {

  render() {
    return (
      <li>
        {this.props.brand} in {this.props.keyOf} 
        <button onClick={() => this.props.onDelete(this.props)}>
          Delete
        </button>
      </li>
    );
  }
} 

export default HarmonicaItem;