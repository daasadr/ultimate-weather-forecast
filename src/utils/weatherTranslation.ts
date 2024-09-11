export const weatherTranslations: { [key: string]: string } = {
  "clear sky": "jasno",
  "few clouds": "polojasno",
  "scattered clouds": "rozptýlené oblačno",
  "broken clouds": "zataženo",
  "shower rain": "přeháňky",
  "rain": "déšť",
  "thunderstorm": "bouřka",
  "snow": "sněžení",
  "mist": "mlha",
  "light rain": "lehký déšť",
  "overcast clouds": "oblačno",
  "moderate rain":"mírný déšť"
};

export function translateWeatherDescription(description: string): string {
  return weatherTranslations[description.toLowerCase()] || description;
}