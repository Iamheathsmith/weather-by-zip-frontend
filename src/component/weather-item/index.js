import React from 'react';
import {time, windDir, Greenwich} from '../../lib/utils';
import './weather-item.scss';

class DayWeather extends React.Component {

  render() {
    let date = time();
    let temp = this.props.weatherItem.weather.main;
    return (
      <div className="day-item">
        <section>
          <div className="day-day">{date.date} At {date.time}</div>
          <div className="temp-now">{Math.round(temp.temp)}</div>
          <div className="temps"><p className="high">{Math.round(temp.temp_max)}</p> / <p className="low">{Math.round(temp.temp_min)}</p></div>
          <div className="humidity">Humidity: {temp.humidity}%</div>
          <div className="conditions">{this.props.weatherItem.weather.weather[0].description}</div>
          <div className="wind">{Math.round(this.props.weatherItem.weather.wind.speed)} MPH {windDir(this.props.weatherItem.weather.wind.deg)}</div>
          <div>{Greenwich(this.props.weatherItem.time.rawOffset)} </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
        </section>
      </div>
    );
  }
}

export default DayWeather;
