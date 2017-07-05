import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {
  renderList(cityData) {
    const name = cityData.city.name;
    const temp = cityData.list.map((weather) => weather.main.temp );
    const pressure = cityData.list.map((weather) => weather.main.pressure );
    const humidity = cityData.list.map((weather) => weather.main.humidity );

    return (
      <tr key={name}>
        <td>
          {name}
        </td>
        <td>
          <Chart data={temp} color="blue"/>
        </td>
        <td>
          <Chart data={humidity} color="red"/>
        </td>
        <td>
          <Chart data={pressure} color="orange"/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Pressure</th>
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
