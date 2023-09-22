import axios from "axios"

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '1a85317ad207e5abd5674f235e4bc3c7'

export const FetchWeatherAPI = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
        q: query,
        units: 'metric',
        APPID: API_KEY
    }
  })

  return data
}
