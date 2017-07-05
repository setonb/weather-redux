import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {
  renderList(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp - 273.15 );
    const humidities = cityData.list.map(weather => weather.main.humidity );
    const pressures = cityData.list.map(weather => weather.main.pressure * 0.00098692316931);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="blue" units="C"/></td>
        <td><Chart data={humidities} color="red" units="%"/></td>
        <td><Chart data={pressures} color="orange" units="atm"/></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Humidity (%)</th>
            <th>Pressure (atm)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderList)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather } // same as (state) { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);
