import React from 'react';
import SearchCityField from '../SearchCityFields';
import ForecastTable from '../ForecastTable';
import './WeatherApp.scss';

const WeatherApp: React.FC = () => {
  return (
    <div className="weather-app">
      <h1>Předpověď počasí</h1>
      <div className="weather-app-content">
        <div className="search-column">
          <SearchCityField />
        </div>
        <div className="forecast-column">
          <ForecastTable />
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;