
import * as types from './types';

export const increaseCounter = () => ({
  type: types.INCREASE_COUNTER,
  payload: 1,
});

export const decreaseCounter = () => ({
  type: types.DECREASE_COUNTER,
  payload: 1,
});
export const setCounter = () => ({
  type: types.SET_COUNTER,
  payload: 0,
});
