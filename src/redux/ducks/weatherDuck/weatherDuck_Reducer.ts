import { Weather, WeatherArray } from "../../../models/WeatherModel";
import {actionTypes} from "./weatherDuck_ActionTypes";
import IActionModel from "../../../interfaces/IActionModel";
import weatherInitialState from "./weatherDuck_InitialState";

interface DefaultStateWeather {
  loading: boolean,
  weatherArray?: WeatherArray
}

export const defaultState: DefaultStateWeather = {
  loading: false,
  weatherArray: weatherInitialState(),
} as DefaultStateWeather

const weatherReducer = (previousState: DefaultStateWeather = defaultState, action: IActionModel) : DefaultStateWeather => {
  const {type: actionType} = action;
  switch (actionType) {
    case actionTypes.WEATHER_FAILED_LOADING:
      return {
        ...previousState
      }
    case actionTypes.WEATHER_REQUESTED:
      return {
        loading: true,
        weatherArray: previousState.weatherArray
      }
    case actionTypes.WEATHER_SUCCESS:
      debugger;
      return {
        
        loading: false,
        weatherArray: action.payload
      }
    default:
      return previousState
  }
};


export default weatherReducer