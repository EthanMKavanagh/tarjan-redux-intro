import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class HarmonicaItem extends Component {

  onDelete = () => {
    this.props.dispatch({
      type: 'DELETE_ITEM',
      payload: this.props.id
    });
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