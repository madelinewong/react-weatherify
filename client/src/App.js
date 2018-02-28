import React, { Component } from "react";
import "./App.css";
import { getWeather } from "./services/weather";
import { isEmptyObject } from './utils';
import CurrentWeather from './CurrentWeather';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      lon: 0,
      currentWeather: {},
      error: null
    };
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLonChange = this.handleLonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    });
  }

  handleLatChange(e) {
    this.setState({
      lat: +e.target.value
    });
  }

  handleLonChange(e) {
    this.setState({
      lon: +e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("submitting some things");
    getWeather(this.state.lat, this.state.lon)
    .then(response => {
      const currentWeather = response.data.currently;
      this.setState({
        currentWeather: currentWeather
      });
    })
    .catch(error => {
      console.error(error);
      this.setState({
        error: "you continue to disappoint me, madeline."
      });
    });
  }
  render() {
    if(this.setState.error){
      return (
        <h1>{this.state.error}</h1>
      );
    }
    return (
      <div>
        <style>
@import url('https://fonts.googleapis.com/css?family=Raleway');
</style>
         { isEmptyObject (this.state.currentWeather) ?
        "" : 
        <CurrentWeather {...this.state.currentWeather}/>  }
        <h1>Weatherify!</h1>
        <p>Don't worry, she geolocates.</p>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            lat:
            <input
              type="number"
              min="-90"
              max="90"
              step="0.0000000000000001"
              onChange={e => this.handleLatChange(e)}
              value={this.state.lat}
              required
            />
          </label>
          <label>
            lon:
            <input
              type="number"
              min="-180"
              max="180"
              step="0.0000000000000001"
              onChange={e => this.handleLonChange(e)}
              value={this.state.lon}
              required
            />
          </label>
          <button type="submit">get weather now</button>
        </form>
        { this.state.error ? <h1>{this.state.error}</h1> : ''}
      </div>
    );
  }
}

export default App;
