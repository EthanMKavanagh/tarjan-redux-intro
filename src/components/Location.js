import React, {Component} from 'react';
import {connect} from 'react-redux';

class Location extends Component {

  onChangeCity = (event) => {
    this.props.dispatch({
      type: 'SET_CITY',
      payload: event.target.value
    });
  }

  onChangeState = (event) => {
    this.props.dispatch({
      type: 'SET_STATE',
      payload: event.target.value
    });
  }

  render() {
    console.log('Location props:', this.props)

    return (
      <p>
        I live in {this.props.city}, {this.props.state}.

        <input
          type="text"
          placeholder="Change City"
          onChange={this.onChangeCity}
        />
        <input
          type="text"
          placeholder="Change State"
          onChange={this.onChangeState}
        />
      </p>
    );
  }
} 

const mapStateToProps = (reduxState) => ({
  city: reduxState.profile.location.city,
  state: reduxState.profile.location.state
  // reduxState (just pushes the entire state into the function)
});

// export default Location;
// const ConnectedLocation = connect()(Location);
// export default ConnectedLocation;

export default connect(mapStateToProps)(Location);