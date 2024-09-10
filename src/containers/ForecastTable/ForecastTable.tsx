import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../GlobalContext/GlobalContext';
import { getWeatherIcon, ForecastData } from '../../utils/weatherUtils';
import {
  fetchWeatherForecast,
  WeatherData,
} from '../../services/weatherService';
import './ForecastTable.scss';

const ForecastTable: React.FC = () => {
  const { selectedCityId } = useGlobalContext();
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCityId) {
      setIsLoading(true);
      setError(null);
      fetchWeatherForecast(selectedCityId)
        .then(data => {
          return processWeatherData(data);
        })
        .then(processed => {
          setForecastData(processed);
        })
        .catch(err => {
          console.error('Error fetching weather:', err);
          setError('Nepodařilo se načíst předpověď počasí');
        })
        .finally(() => setIsLoading(false));
    }
  }, [selectedCityId]);
  const processWeatherData = (data: WeatherData[]): ForecastData[] => {
    const dailyData: ForecastData[] = [];
    for (let i = 0; i < data.length; i += 8) {
      const forecast = data[i];
      dailyData.push({
        date: new Date(forecast.dt * 1000).toISOString(),
        temperature: Math.round(forecast.main.temp),
        description: forecast.weather[0].description,
        icon: forecast.weather[0].icon,
        windSpeed: Math.round(forecast.wind.speed),
        precipitation: forecast.rain ? Math.round(forecast.rain['3h']) : 0,
      });
    }
    return dailyData.slice(0, 5); // Omezení na 5 dní
  };

  if (isLoading) return <div>Načítání...</div>;
  if (error) return <div>{error}</div>;
  if (forecastData.length === 0)
    return <div>Vyberte město pro zobrazení předpovědi</div>;

  return (
    <section className="forecast-table">
      <h2>5-denní předpověď počasí</h2>
      <table>
        <thead>
          <tr>
            <th>Datum</th>
            <th>Počasí</th>
            <th>Teplota</th>
            <th>Vítr</th>
            <th>Srážky</th>
          </tr>
        </thead>
        <tbody>
          {forecastData.map((forecast, index) => (
            <tr key={index}>
              <td>{new Date(forecast.date).toLocaleDateString('cs-CZ')}</td>
              <td>
                <img
                  src={getWeatherIcon(forecast.icon)}
                  alt={forecast.description}
                  title={forecast.description}
                />
                {forecast.description}
              </td>
              <td>{forecast.temperature}°C</td>
              <td>{forecast.windSpeed} m/s</td>
              <td>{forecast.precipitation} mm</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ForecastTable;
