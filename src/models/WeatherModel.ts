import {actionTypes} from "../redux/ducks/weatherDuck/weatherDuck_ActionTypes";

export type Weather = {
    id: number,
    cityName: String,
    lat: number,
    lon: number,
    countryAbbr: String,
    weather: String,
};

//https://bobbyhadz.com/blog/typescript-declare-array-of-objects

export type WeatherArray = {
  weatherArray: Weather[]
};

export interface WeatherLoading {
  type: typeof actionTypes.WEATHER_REQUESTED;
}

export interface WeatherFailed {
  type: typeof actionTypes.WEATHER_FAILED_LOADING;
}

export interface WeatherSuccess {
  type: typeof actionTypes.WEATHER_SUCCESS;
  payload: WeatherArray;
}