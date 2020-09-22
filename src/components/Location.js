import React, {Component} from 'react';

class Location extends Component {

  onChangeCity = (event) => {
    this.props.onChangeCity(event.target.value);
  }

  render() {
    return (
      <p>
        I live in {this.props.city}, {this.props.state}

        <input
          type="text"
          placeholder="Change City"
          onChange={this.onChangeCity}
        />
      </p>
    );
  }
} 

export default Location;