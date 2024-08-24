# CLI Weather Application 🌦️

A simple CLI tool to fetch weather information for any city and country using the OpenWeatherMap API. This script is built with Node.js and uses Axios for HTTP requests and dotenv for managing API keys.

## Features
- Fetches current weather information (temperature and description) for a given city and country.
- Uses OpenWeatherMap's Geocoding API to convert city and country names into geographic coordinates.
- Securely manages API keys using dotenv.

## Prerequisites
- Node.js installed on your machine.
- An API key from [OpenWeatherMap](https://openweathermap.org/api). (Sign up to get one for free)

## Installation

1- Install dependencies

```
npm install
```
2- Create a .env file in the root directory and add your OpenWeatherMap API key:
```
OPENWEATHERMAP_API_KEY=your_api_key_here
```
## Usage

To fetch the weather for a specific city and country, run the following command:
```
node weather.js "City" "Country"
```
Example
```
node weather.js "Asuncion" "PY"
```

## Considerations

API Requests: The script makes two API requests. The first request fetches the latitude and longitude of the city, and the second request fetches the weather data using these coordinates.

Error Handling: The script includes basic error handling to manage issues like invalid city/country names or network errors.

Environment Variables: API keys are stored securely in a .env file and accessed via process.env.

# Acknowledgments

OpenWeatherMap for providing the weather API.

dotenv for environment variable management.

Axios for making HTTP requests simple.



