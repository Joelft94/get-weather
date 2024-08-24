import axios from "axios";

export const geocode = async (city, country, apiKey) => {
  try {
    const geoResponse = await axios.get(
      "http://api.openweathermap.org/geo/1.0/direct",
      {
        params: {
          q: `${city},${country}`,
          limit: 1,
          appid: apiKey,
        },
      }
    );

    if (geoResponse.data.length === 0) {
      throw new Error(
        `Invalid location: "${city}, ${country}". Please check the city and country names.`
      );
    }

    const { lat, lon } = geoResponse.data[0];
    return { lat, lon };
  } catch (error) {
    throw new Error("Error fetching geolocation: " + error.message);
  }
};
