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

        <Location />
        
      </section>
    );
  }
} 

export default Profile;