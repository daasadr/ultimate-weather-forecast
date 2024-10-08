
declare const process: {
  env: {
    REACT_APP_OPEN_WEATHER_KEY: string
  }
}

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export interface WeatherData {
  dt: number;
  main: {
    temp: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  rain?: {
    '3h': number;
  };
}

export interface CityData {
  name: string;
  country: string;
}

export async function fetchWeatherForecast(cityId: number): Promise<WeatherData[]> {
  const response = await fetch(`${BASE_URL}/forecast?id=${cityId}&appid=${API_KEY}&units=metric&lang=cs`);
  if (!response.ok) {
    throw new Error('Nepodařilo se načíst data o počasí');
  }
  const data = await response.json();
  return data.list;
}

export async function fetchCityName(cityId: number): Promise<string> {
  const response = await fetch(`${BASE_URL}/weather?id=${cityId}&appid=${API_KEY}&lang=cs`);
  if (!response.ok) {
    throw new Error('Nepodařilo se načíst informace o městě');
  }
  const data = await response.json();
  return `${data.name}, ${data.sys.country}`;
}