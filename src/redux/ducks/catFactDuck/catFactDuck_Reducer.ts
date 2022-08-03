import { CatFact } from "../../../models/CatFactModel";
import {actionTypes} from "./catFactDuck_ActionTypes";
import IActionModel from "../../../interfaces/IActionModel";
import catFactInitialState from "./catFactDuck_InitialState";
interface DefaultStateI {
  loading: boolean,
  catFact?: CatFact
}

export const defaultState: DefaultStateI ={
  loading: false,
  catFact: catFactInitialState()
}

const catFactReducer = (previousState: DefaultStateI = defaultState, action: IActionModel) : DefaultStateI => {
  const {type: actionType} = action;
  switch (actionType) {
    case actionTypes.CATFACT_FAILED_LOADING:
      return {
        ...previousState
      }
    case actionTypes.CATFACT_REQUESTED:
      return {
        loading: true,
        catFact: previousState.catFact
      }
    case actionTypes.CATFACT_SUCCESS:
      return {
        loading: false,
        catFact: action.payload
      }
    default:
      return previousState
  }
};


export default catFactReducer