import React, {Component} from 'react';

class Location extends Component {
  render() {
    return (
      <p>
        I live in {this.props.city}, {this.props.state}
      </p>
    );
  }
} 

export default Location;