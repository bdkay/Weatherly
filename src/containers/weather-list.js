import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class WeatherList extends Component {
  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
  
        </tbody>
      </table>
    );
  }
}

// state.weather refactored
function mapStateToProps({ weather }){
  // Available because we assigned our WeatherReducer to the weather key in combined reducers
  // { weather: weather } refactored
  return { weather }
}