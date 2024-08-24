import axios from 'axios';
import 'dotenv/config'

const apiKey = process.env.API_KEY

// Main function to get weather information
const getWeather = async (city, country) => {
  try {
    // Geo API call to get latitude and longitude of our city
    const geoResponse = await axios.get('http://api.openweathermap.org/geo/1.0/direct', {
      params: {
        q: `${city},${country}`,
        limit: 1,
        appid: apiKey,
      },
    });

    const { lat, lon } = geoResponse.data[0];

    // Weather API call to get weather information
    const weatherResponse = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat,
        lon,
        appid: apiKey,
        units: 'metric', // Metric units for Celsius
      },
    });

    const weather = weatherResponse.data;
    console.log(`Weather in ${weather.name}, ${country}:`);
    console.log(`Temperature: ${weather.main.temp}°C`);
    console.log(`Weather: ${weather.weather[0].description}`);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
  }
};

// Get city and country from command line arguments
const [city, country] = process.argv.slice(2);

if (!city || !country) {
  console.error('Please provide both a city and a country.');
  process.exit(1);
}

getWeather(city, country);
