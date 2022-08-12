import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import catFactReducer from '../redux/ducks/catFactDuck/catFactDuck_Reducer'
import counterReducer from '../features/counter/counterSlice';
import weatherReducer from '../redux/ducks/weatherDuck/weatherDuck_Reducer'

//https://redux.js.org/usage/usage-with-typescript#type-checking-reducers
const rootReducers = combineReducers({
  weatherArray: weatherReducer,
  catFact: catFactReducer,
  counterReducer,
  
});

export const store = configureStore({
  reducer: rootReducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
