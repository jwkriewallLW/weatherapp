import WeatherFetch from "../shared/WeatherFetch";
import DispatchFunctionType from "../../interfaces/DispatchFunctionType";
import ActionModel from "../../models/ActionModel";
import { actionTypes } from "../../redux/ducks/weatherDuck/weatherDuck_ActionTypes"

const relativeUrl = '';
const currentTime = new Date();

//this function dispatches the actions. 
async function GetWeatherAsync(dispatch: DispatchFunctionType) {
    WeatherFetch
    .get(relativeUrl)
    .then((data: any) => {
      if (!!data) {
        return dispatch(ActionModel(actionTypes.WEATHER_SUCCESS, data));
      } else {
        return dispatch(ActionModel(actionTypes.WEATHER_NOT_FOUND, null));
      }
    })
    .catch((err: any) => {
      dispatch(
        ActionModel(actionTypes.WEATHER_FAILED_LOADING, {
          timestamp: currentTime,
          details: err,
          relativeUrl,
          message: "Data Request Failed",
        })
      );
    });
}

export default GetWeatherAsync;


