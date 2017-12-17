import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getWeather } from '../../actions/index'
import { getTime } from '../../actions/index'
import moment from 'moment-timezone'
import Time from 'react-time'
import TweenMax from 'gsap'
import TimeComponent from './time/time'

//IMAGES
import clearSkyDay from '../../assets/weather/contrast.png'
import clearSkyNight from '../../assets/weather/moon.png'

import cloudDay from '../../assets/weather/cloud-day.png';
import cloudNight from '../../assets/weather/cloud-night.png';
import cloudGlobal from '../../assets/weather/cloud.png';


import rainDay from '../../assets/weather/rain-day.png';
import rainNight from '../../assets/weather/rain-night.png';

import stormGlobal from '../../assets/weather/storm.png';
import snowGlobal from '../../assets/weather/snow.png';
import mistGlobal from '../../assets/weather/mist.png';


import iconSunset from '../../assets/weather/sunset.png'
import iconSunrise from '../../assets/weather/sunrise.png'
import iconWind from '../../assets/weather/wind.png'

//CSS
import './weather.css'

class Weather extends Component {

  componentWillMount(){
    this.props.getWeather();
  }
  componentDidMount(){
    let container = this.refs.weatherContainer
    return TweenMax.fromTo(container, 1, {opacity : 0, scale : 0},{opacity : 1, scale : 1}).delay(1);
  }

  checkWeather(){
    let description = this.props.weather.weather[0].description;
    let sunriseTime = new Date(this.props.weather.sys.sunrise * 1000).valueOf()
    let sunsetTime = new Date(this.props.weather.sys.sunset * 1000).valueOf()
    let currentTime = moment().tz("Europe/Brussels").utc().valueOf();
    if(description === 'clear sky' && (currentTime < sunsetTime && currentTime > sunriseTime)){
      return clearSkyDay
    }else if (description === 'clear sky' && (currentTime > sunsetTime || currentTime < sunriseTime)) {
      return clearSkyNight
    }else if(description === 'few clouds' && (currentTime < sunsetTime && currentTime > sunriseTime)){
      return cloudDay
    }else if (description === 'few clouds' && (currentTime > sunsetTime || currentTime < sunriseTime)) {
      return cloudNight
    }else if(description === 'overcast clouds' && (currentTime < sunsetTime && currentTime > sunriseTime)){
      return cloudDay
    }else if(description === 'overcast clouds' && (currentTime > sunsetTime || currentTime < sunriseTime)){
      return cloudNight
    }else if (description === 'scattered clouds' || description === 'broken clouds') {
      return cloudGlobal
    }else if((description === 'shower rain' || description === 'rain') && (currentTime < sunsetTime && currentTime > sunriseTime)){
      return rainDay
    }else if ((description === 'shower rain' || description === 'rain') && (currentTime > sunsetTime || currentTime < sunriseTime)) {
      return rainNight
    }else if(description === 'thunderstorm'){
      return stormGlobal
    }else if(description === 'snow'){
      return snowGlobal
    }else if(description === 'mist'){
      return mistGlobal
    }
  }

  render() {
    if(this.props.weather){
      let sunriseTime = new Date(this.props.weather.sys.sunrise * 1000)
      let sunsetTime = new Date(this.props.weather.sys.sunset * 1000)
      return(
        <div className="col-xs-offset-2 col-xs-2 weather-container" ref="weatherContainer">
          <div className="row">
            <div className="col-xs-12 text-center">
              <h3> {this.props.weather.name} </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 text-center">
              <TimeComponent />
            </div>
          </div>
          <div className="row w-row">
            <div className="col-xs-12 text-center w-icon">
              <img width="100" src={this.checkWeather()} alt="weather"/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 text-center temp">
              <h2> {this.props.weather.main.temp}°C </h2>
            </div>
          </div>
        </div>
      );
    }else{
      return <div className="col-xs-offset-1 col-xs-4 weather-container" ref="weatherContainer"></div>
    }
  }
}

function mapStateToProps(state){
  return{
    weather : state.weather,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getWeather : getWeather}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
