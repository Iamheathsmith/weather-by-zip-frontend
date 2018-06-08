import React from 'react';
import {time, windDir, Greenwich} from '../../lib/utils';
import './weather-item.scss';

class DayWeather extends React.Component {

  render() {
    let date = time();
    let temp = this.props.weatherItem.weather.main;
    return (
      <div className="day-item">
        <div className="left-side">
          <div className="temp-saying">Current Temp</div>
          <div className="temp-now">{Math.round(temp.temp)}</div>
          <div className="temps"><h1 className="high">{Math.round(temp.temp_max)}</h1> / <h1 className="low">{Math.round(temp.temp_min)}</h1></div>
          <div className="wind">{Math.round(this.props.weatherItem.weather.wind.speed)} MPH {windDir(this.props.weatherItem.weather.wind.deg)}</div>
          <div className="humidity">Humidity: {temp.humidity}%</div>
          <div className="conditions">{this.props.weatherItem.weather.weather[0].description}</div>
        </div>
        <div className="right-side">
          <div className="day-location left"><p>City</p>: {this.props.weatherItem.weather.name}</div>
          <div className="day-date left"><p>Today's Date</p>: {date.date} At {date.time}</div>
          <div className="time-zone left"><p>Time Zone</p>: {this.props.weatherItem.time.timeZoneName}. UTC {Greenwich(this.props.weatherItem.time.rawOffset)} Hours</div>
          <div className="day-elevation left"><p>Elevation</p>: {Math.round(this.props.weatherItem.elevation.results[0].elevation*3.2808) + ' ' + 'feet'}</div>
          <div className="day-saying left">Currently weather in {this.props.weatherItem.weather.name} is {Math.round(temp.temp)} with {this.props.weatherItem.weather.weather[0].description} with a high of {Math.round(temp.temp_max)} and a low of {Math.round(temp.temp_min)}. You can see winds out of the {windDir(this.props.weatherItem.weather.wind.deg)} at {Math.round(this.props.weatherItem.weather.wind.speed)} MPH. </div>
        </div>
      </div>
    );
  }
}

export default DayWeather;
