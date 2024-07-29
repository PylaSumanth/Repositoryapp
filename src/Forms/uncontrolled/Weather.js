import axios from 'axios';
import React, { useEffect, useState } from 'react';

function WeatherComponent() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = 'YOUR_API_KEY';
  
  useEffect(() => {
    initGeolocation();
  }, );

  function initGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, fail);
    } else {
      setError("Sorry, your browser does not support geolocation services.");
    }
  }

  function success(position) {
    const { latitude, longitude } = position.coords;
    fetchWeather(latitude, longitude);
  }

  function fail() {
    setError("Unable to retrieve your location.");
  }

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      setError("Failed to fetch weather data.");
    }
  };

  return (
    <div>
      <h1>Weather Component</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default WeatherComponent;
