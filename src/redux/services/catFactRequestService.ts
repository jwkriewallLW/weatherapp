import CatFactFetch from "../shared/CatFactFetch";
import DispatchFunctionType from "../../interfaces/DispatchFunctionType";
import ActionModel from "../../models/ActionModel";
import { actionTypes } from "../../redux/ducks/catFactDuck/catFactDuck_ActionTypes"
const relativeUrl = 'fact';
const currentTime = new Date();
async function GetCatFactAsync(dispatch: DispatchFunctionType) {
    CatFactFetch
    .get(relativeUrl)
    .then((data: any) => {
      if (!!data) {
        return dispatch(ActionModel(actionTypes.CATFACT_SUCCESS, data));
      } else {
        return dispatch(ActionModel(actionTypes.CATFACT_NOT_FOUND, null));
      }
    })
    .catch((err: any) => {
      dispatch(
        ActionModel(actionTypes.CATFACT_FAILED_LOADING, {
          timestamp: currentTime,
          details: err,
          relativeUrl,
          message: "Data Request Failed",
        })
      );
    });
}

export default GetCatFactAsync;


