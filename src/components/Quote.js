import React, {Component} from 'react';
import {connect} from 'react-redux';

class Quote extends Component {
  render() {
    return (
      <section className="quote">
        <h3>Quote of the Day:</h3>
        <img src={this.props.image} alt="quote-person" />
        <blockquote><em>{this.props.quote}</em></blockquote>
        <blockquote>- {this.props.author}</blockquote>
        <div className="clearfix"></div>
      </section>
    );
  }
} 

const mapStateToProps = (reduxState) => ({
  image: reduxState.quote.image,
  quote: reduxState.quote.quote,
  author: reduxState.quote.author
});
export default connect(mapStateToProps)(Quote);