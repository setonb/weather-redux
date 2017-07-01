import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
      super(props);

      this.state = { term: '' }

      // Binds "this" from the class "onInputChange" to the method called this.onInputChange 
      this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <form className="input-group">
        <input
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Get a five-dat forecast in your favorite cities"
          className="form-control"
          type="text"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}
