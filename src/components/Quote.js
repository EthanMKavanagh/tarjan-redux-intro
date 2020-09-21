import React, {Component} from 'react';

class Quote extends Component {
  render() {
    return (
      <section>
        <h3>Quote of the Day:</h3>
        <blockquote><em>{this.props.quote}</em></blockquote>
        <blockquote>- {this.props.author}</blockquote>
      </section>
    );
  }
} 

export default Quote;