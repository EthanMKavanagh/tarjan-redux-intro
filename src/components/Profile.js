import React, {Component} from 'react';
import Location from './Location'

class Profile extends Component {
  render() {
    return (
      <section>
        <h3>My Profile</h3>
        <p>
          Hello my name is {this.props.name}
        </p>

        <Location city={this.props.location.city} state={this.props.location.state} />
      </section>
    );
  }
} 

export default Profile;