import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './App.css'; 

function Weather({ weather, selectedCity }) {
 
  const [cityname, setCityname] = useState('');

  useEffect(() => {
    if (weather && weather.city) {
      setCityname(weather.city);
    } else {
      setCityname(selectedCity);
    }
  }, [weather, selectedCity]);

  if (!weather) {
    return <h3>Click on city name</h3>;
  }

  let backgroundStyle = 'defaultStyle';
  const temperature = weather.current_weather.temperature;
  const windspeed = weather.current_weather.windspeed;
  
  

  if (temperature > 24) {
    backgroundStyle = 'beach';
  } else if (temperature < 0) {
    backgroundStyle = 'cold';
  }
 if (windspeed >10) {
  backgroundStyle ='windy';}


  return (
    <div className={backgroundStyle}>
      <h4>Selected City: {cityname}</h4>

      <Row>
        <Col>Lattitude</Col>
        <Col>{weather.latitude}</Col>
      </Row>
      <Row>
        <Col>Longitude</Col>
        <Col>{weather.longitude}</Col>
      </Row>
      <Row>
        <Col>Current weather</Col>
        <Col>
          <div>Temperature: {weather.current_weather.temperature}</div>
          <div>Wind speed: {weather.current_weather.windspeed}</div>
          <div>Apparent Temperature: {weather.current_weather.apparenttemperature}</div>
          <div>Weather code: {weather.current_weather.weathercode}</div>
          <div>Showers: {weather.current_weather.showers}</div>
        </Col>
      </Row>
      
    </div>
  );
}

export default Weather;