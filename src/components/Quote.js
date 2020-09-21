import React, {Component} from 'react';

class Quote extends Component {
  render() {
    return (
      <section class="quote">
        <h3>Quote of the Day:</h3>
        <img src={this.props.image} alt="quote image" />
        <blockquote><em>{this.props.quote}</em></blockquote>
        <blockquote>- {this.props.author}</blockquote>
        <div class="clearfix"></div>
      </section>
    );
  }
} 

export default Quote;