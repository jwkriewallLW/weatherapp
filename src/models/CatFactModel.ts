import {actionTypes} from "../redux/ducks/catFactDuck/catFactDuck_ActionTypes";

export type CatFact = {
  fact: string;
  length: number; 
};

export interface CatFactLoading {
  type: typeof actionTypes.CATFACT_REQUESTED;
}

export interface CatFactFailed {
  type: typeof actionTypes.CATFACT_FAILED_LOADING;
}

export interface CatFactSuccess {
  type: typeof actionTypes.CATFACT_SUCCESS;
  payload: CatFact;
}