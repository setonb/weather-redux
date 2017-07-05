import React, { Component } from 'react';

export default class GoogleMap extends Component {
  // Need to use this component lifecycle method because we're working with a 3rd party library
  // GoogleMaps has no idea how to interact with the ReactDOM
  // This method loads a new map and "attaches" it to an empty div with "ref" equal to map
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return (
      <div ref="map" />
    );
  }
}
