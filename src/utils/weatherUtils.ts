export interface ForecastData {
  date: string;
  temperature: number;
  description: string;
  icon: string;
  windSpeed: number;
  precipitation: number;
}

export const mockForecastData: ForecastData[] = [
  { date: '2024-09-06', temperature: 22, description: 'Slunečno', icon: '01d', windSpeed: 5, precipitation: 0 },
  { date: '2024-09-07', temperature: 20, description: 'Částečně oblačno', icon: '02d', windSpeed: 7, precipitation: 10 },
  { date: '2024-09-08', temperature: 18, description: 'Déšť', icon: '10d', windSpeed: 10, precipitation: 25 },
  { date: '2024-09-09', temperature: 17, description: 'Přeháňky', icon: '09d', windSpeed: 8, precipitation: 15 },
  { date: '2024-09-10', temperature: 19, description: 'Polojasno', icon: '03d', windSpeed: 6, precipitation: 5 },
];

export const getWeatherIcon = (icon: string): string => {
  return `http://openweathermap.org/img/wn/${icon}.png`;
};