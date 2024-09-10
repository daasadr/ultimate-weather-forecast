import React, { useEffect, useState} from 'react';
import { useGlobalContext } from '../GlobalContext/GlobalContext';
import { getWeatherIcon, ForecastData, mockForecastData } from '../../utils/weatherUtils';
import './ForecastTable.scss';

const ForecastTable: React.FC = () => {
    const { selectedCityId } = useGlobalContext();
    const [forecastData, setForecastData] = useState<ForecastData[]>([]);

    useEffect(() => {
        if (selectedCityId) {
            // Zde by se normálně volala API pro získání předpovědi
          // Pro účely tohoto příkladu použiji mockovaná data
          setForecastData(mockForecastData);
        }
    }, [selectedCityId]);


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
              <td>{new Date(forecast.date).toLocaleDateString()}</td>
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