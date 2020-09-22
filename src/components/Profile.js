import React, {Component} from 'react';
import Location from './Location'
import {connect} from 'react-redux';

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

const mapStateToProps = (reduxState) => ({
  name: reduxState.profile.name
});
export default connect(mapStateToProps)(Profile);