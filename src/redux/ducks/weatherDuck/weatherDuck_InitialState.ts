import { Weather, WeatherArray } from "../../../models/WeatherModel";

export default function weatherInitialState(): WeatherArray {
  return {
    // id: 0,
    // cityName: '',
    // lat: 0,
    // lon: 0,
    // countryAbbr: '',
    // weather: ''  
    weatherArray: [{id:0, cityName:'', lat: 0, lon: 0, countryAbbr: '', weather: '' }]
  };
}
