import 'dotenv/config';
import { geocode } from './src/geocode.js';
import { fetchWeather } from './src/fetchWeather.js';
import { showHelp } from './src/showHelp.js';

const apiKey = process.env.API_KEY;
// console.log(apiKey);
const [arg1, arg2] = process.argv.slice(2);

if (arg1 === '--help') {
  showHelp();
} else if (arg1 && arg2) {
  geocode(arg1, arg2, apiKey)
    .then(({ lat, lon }) => fetchWeather(lat, lon, apiKey))
    .then(weather => {
      console.log(`Weather in ${weather.name}, ${arg2}:`);
      console.log(`Temperature: ${weather.main.temp}°C`);
      console.log(`Weather: ${weather.weather[0].description}`);
    })
    .catch(error => console.error(error.message));
} else {
  console.error('Invalid input. Use --help to see usage instructions.');
}
