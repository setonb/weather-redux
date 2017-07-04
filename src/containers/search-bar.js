import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
      super(props);

      this.state = { term: '' }

      // Binds "this" from the class "onInputChange" to the method called this.onInputChange
      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
      event.preventDefault();

      // We need to use the action to go and fetch the weather data
      this.props.fetchWeather(this.state.term);
      // This clears the search term after searching
      this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          type="text"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

// To intereact with actions you need to do three things:
// 1) import the connect, bindaActionCreators, and actions
// 2) mapDispatchToProps function to bind the action creator
// 3) export connect with 2 arguments ( can be null )and the Container Component
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
