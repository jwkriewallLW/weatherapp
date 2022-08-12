import ActionModel from "../../../models/ActionModel";
import { WeatherArray } from "../../../models/WeatherModel";
import { actionTypes } from "./weatherDuck_ActionTypes";

export function LoadingWeatherAction(){
  return ActionModel(actionTypes.WEATHER_REQUESTED);
}
export function FailedWeatherAction(){
  return ActionModel(actionTypes.WEATHER_FAILED_LOADING);
}
export function SuccessWeatherRetrieval(payload: WeatherArray){
  debugger;
  return ActionModel(actionTypes.WEATHER_SUCCESS, payload);
}