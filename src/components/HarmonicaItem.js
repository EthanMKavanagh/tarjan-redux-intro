import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class HarmonicaItem extends Component {

  onDelete = () => {
    this.props.onDelete(this.props.id)
    alert(`Deleted your ${this.props.brand}. Going Home.`);
    console.log('this.props.history:', this.props.history);
    this.props.history.push('/');
  }

  render() {
    return (
      <li>
        {this.props.brand} in {this.props.keyOf} 
        <button onClick={this.onDelete}>
          Delete
        </button>
      </li>
    );
  }
} 

export default withRouter(HarmonicaItem);