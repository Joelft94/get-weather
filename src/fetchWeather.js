import axios from 'axios';

export const fetchWeather = async (lat, lon, apiKey) => {
  try {
    const weatherResponse = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat,
        lon,
        appid: apiKey,
        units: 'metric',
      },
    });

    const weather = weatherResponse.data;
    return weather;
  } catch (error) {
    throw new Error('Error fetching weather data: ' + error.message);
  }
};
