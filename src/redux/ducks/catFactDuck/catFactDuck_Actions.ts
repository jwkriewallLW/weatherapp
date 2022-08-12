import ActionModel from "../../../models/ActionModel";
import { CatFact } from "../../../models/CatFactModel";
import {actionTypes} from "./catFactDuck_ActionTypes";

export function LoadingCatFactAction(){
  return ActionModel(actionTypes.CATFACT_REQUESTED);
}
export function FailedCatFactAction(){
  return ActionModel(actionTypes.CATFACT_FAILED_LOADING);
}
export function SuccessCatFactRetrieval(payload: CatFact){
  return ActionModel(actionTypes.CATFACT_SUCCESS, payload);
}